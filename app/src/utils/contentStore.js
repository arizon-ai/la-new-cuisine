// Content Store with Supabase persistence
// Falls back to localStorage if Supabase is unavailable

import { supabase } from '../lib/supabase';

const CONTENT_KEY = 'lnc_editable_content';
const TABLE_NAME = 'lnc_content';
const SITE_ID = 'la-new-cuisine'; // Unique identifier for this site

// Cache for content to reduce database calls
let contentCache = null;
let cacheTimestamp = null;
const CACHE_DURATION = 30000; // 30 seconds

/**
 * Initialize the content table if it doesn't exist
 * This should be called once when the app starts
 */
export async function initializeContentTable() {
    try {
        // Check if table exists by trying to select from it
        const { error } = await supabase
            .from(TABLE_NAME)
            .select('id')
            .limit(1);

        if (error && error.code === '42P01') {
            // Table doesn't exist - we need to create it via Supabase dashboard
            console.warn('Content table does not exist. Please create it in Supabase dashboard.');
            console.log(`
        CREATE TABLE ${TABLE_NAME} (
          id SERIAL PRIMARY KEY,
          site_id TEXT NOT NULL,
          content_key TEXT NOT NULL,
          content_value TEXT,
          updated_at TIMESTAMP DEFAULT NOW(),
          UNIQUE(site_id, content_key)
        );
        
        -- Enable RLS
        ALTER TABLE ${TABLE_NAME} ENABLE ROW LEVEL SECURITY;
        
        -- Allow anonymous read/write for now
        CREATE POLICY "Allow all operations" ON ${TABLE_NAME}
          FOR ALL USING (true) WITH CHECK (true);
      `);
            return false;
        }
        return true;
    } catch (err) {
        console.error('Error checking content table:', err);
        return false;
    }
}

/**
 * Get all content from Supabase, merged with localStorage
 * localStorage serves as the base layer; Supabase overlays on top
 */
export async function getAllContent() {
    // Check cache first
    if (contentCache && cacheTimestamp && (Date.now() - cacheTimestamp < CACHE_DURATION)) {
        return contentCache;
    }

    // Always start with localStorage as the base
    const localContent = getLocalContent();

    try {
        const { data, error } = await supabase
            .from(TABLE_NAME)
            .select('content_key, content_value')
            .eq('site_id', SITE_ID);

        if (error) {
            console.warn('Supabase error, using localStorage only:', error.message);
            contentCache = localContent;
            cacheTimestamp = Date.now();
            return localContent;
        }

        // Merge: start with localStorage, overlay Supabase data on top
        const merged = { ...localContent };
        if (data && data.length > 0) {
            data.forEach(row => {
                merged[row.content_key] = row.content_value;
            });
            // Only update localStorage when Supabase actually has data
            localStorage.setItem(CONTENT_KEY, JSON.stringify(merged));
        }

        // Update cache
        contentCache = merged;
        cacheTimestamp = Date.now();

        return merged;
    } catch (err) {
        console.error('Error fetching content:', err);
        contentCache = localContent;
        cacheTimestamp = Date.now();
        return localContent;
    }
}

/**
 * Get content by ID, with fallback to default value
 */
export async function getContent(id, defaultValue = '') {
    const allContent = await getAllContent();
    return allContent[id] !== undefined ? allContent[id] : defaultValue;
}

/**
 * Get content synchronously from cache/localStorage
 * Use this for initial render, then update with async version
 */
export function getContentSync(id, defaultValue = '') {
    // Try cache first
    if (contentCache && contentCache[id] !== undefined) {
        return contentCache[id];
    }

    // Fallback to localStorage
    try {
        const allContent = JSON.parse(localStorage.getItem(CONTENT_KEY) || '{}');
        return allContent[id] !== undefined ? allContent[id] : defaultValue;
    } catch {
        return defaultValue;
    }
}

/**
 * Save content by ID to Supabase
 * Returns true if saved successfully to Supabase, false if only saved to localStorage
 */
export async function setContent(id, value) {
    // Update cache immediately
    if (!contentCache) contentCache = {};
    contentCache[id] = value;
    cacheTimestamp = Date.now();

    // Update localStorage as backup (always succeeds)
    let localSaved = false;
    try {
        const localContent = getLocalContent();
        localContent[id] = value;
        localStorage.setItem(CONTENT_KEY, JSON.stringify(localContent));
        localSaved = true;
    } catch (localErr) {
        console.error(`[contentStore] Error guardando en localStorage (key="${id}"):`, localErr);
    }

    try {
        const { error } = await supabase
            .from(TABLE_NAME)
            .upsert({
                site_id: SITE_ID,
                content_key: id,
                content_value: value,
                updated_at: new Date().toISOString()
            }, {
                onConflict: 'site_id,content_key'
            });

        if (error) {
            console.error(`[contentStore] Supabase upsert falló (key="${id}"):`, error.message, error.details || '', error.hint || '');
            // Return true if at least localStorage succeeded — data is preserved locally
            return localSaved;
        }
        return true;
    } catch (err) {
        console.error(`[contentStore] Excepción al guardar en Supabase (key="${id}"):`, err);
        return localSaved;
    }
}

/**
 * Get content from localStorage (fallback)
 */
function getLocalContent() {
    try {
        return JSON.parse(localStorage.getItem(CONTENT_KEY) || '{}');
    } catch {
        return {};
    }
}

/**
 * Export all content as JSON string
 */
export async function exportContent() {
    const content = await getAllContent();
    return JSON.stringify(content, null, 2);
}

/**
 * Import content from JSON string
 */
export async function importContent(jsonString) {
    try {
        const content = JSON.parse(jsonString);

        // Save each key to Supabase
        const promises = Object.entries(content).map(([key, value]) =>
            setContent(key, value)
        );

        await Promise.all(promises);

        // Clear cache to force refresh
        contentCache = null;
        cacheTimestamp = null;

        return true;
    } catch (error) {
        console.error('Error importing content:', error);
        return false;
    }
}

/**
 * Sync local content to Supabase
 * Call this to migrate existing localStorage data
 */
export async function syncLocalToSupabase() {
    const localContent = getLocalContent();
    const keys = Object.keys(localContent);

    if (keys.length === 0) return true;

    let synced = 0;
    for (const key of keys) {
        const success = await setContent(key, localContent[key]);
        if (success) synced++;
    }

    console.log(`Synced ${synced}/${keys.length} items to Supabase`);
    return synced === keys.length;
}

/**
 * Clear all content (use with caution)
 */
export async function clearContent() {
    contentCache = null;
    cacheTimestamp = null;
    localStorage.removeItem(CONTENT_KEY);

    try {
        await supabase
            .from(TABLE_NAME)
            .delete()
            .eq('site_id', SITE_ID);
    } catch (err) {
        console.error('Error clearing content:', err);
    }
}
