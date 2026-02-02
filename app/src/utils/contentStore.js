// Content Store - Utility for managing editable content in localStorage

const CONTENT_KEY = 'lnc_editable_content';

/**
 * Get content by ID, with fallback to default value
 * @param {string} id - Unique identifier for the content
 * @param {string} defaultValue - Default value if no stored content exists
 * @returns {string} - The stored content or default value
 */
export function getContent(id, defaultValue = '') {
    try {
        const allContent = JSON.parse(localStorage.getItem(CONTENT_KEY) || '{}');
        return allContent[id] !== undefined ? allContent[id] : defaultValue;
    } catch (error) {
        console.error('Error reading content from localStorage:', error);
        return defaultValue;
    }
}

/**
 * Save content by ID
 * @param {string} id - Unique identifier for the content
 * @param {string} value - Content to save
 */
export function setContent(id, value) {
    try {
        const allContent = JSON.parse(localStorage.getItem(CONTENT_KEY) || '{}');
        allContent[id] = value;
        localStorage.setItem(CONTENT_KEY, JSON.stringify(allContent));
    } catch (error) {
        console.error('Error saving content to localStorage:', error);
    }
}

/**
 * Get all stored content
 * @returns {Object} - All stored content as key-value pairs
 */
export function getAllContent() {
    try {
        return JSON.parse(localStorage.getItem(CONTENT_KEY) || '{}');
    } catch (error) {
        console.error('Error reading all content from localStorage:', error);
        return {};
    }
}

/**
 * Export all content as JSON string
 * @returns {string} - JSON string of all content
 */
export function exportContent() {
    return JSON.stringify(getAllContent(), null, 2);
}

/**
 * Import content from JSON string
 * @param {string} jsonString - JSON string to import
 * @returns {boolean} - Success status
 */
export function importContent(jsonString) {
    try {
        const content = JSON.parse(jsonString);
        localStorage.setItem(CONTENT_KEY, JSON.stringify(content));
        return true;
    } catch (error) {
        console.error('Error importing content:', error);
        return false;
    }
}

/**
 * Clear all stored content
 */
export function clearContent() {
    localStorage.removeItem(CONTENT_KEY);
}
