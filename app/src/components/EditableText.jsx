import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { getContent, getContentSync, setContent } from '../utils/contentStore';
import { Pencil, Check, X, Loader2 } from 'lucide-react';

/**
 * EditableText - Component for inline text editing
 * 
 * @param {string} id - Unique identifier for this content piece
 * @param {string} defaultValue - Default text if no stored value exists
 * @param {string} tag - HTML tag to render (p, h1, h2, h3, span, etc.)
 * @param {string} className - CSS classes to apply
 * @param {boolean} multiline - If true, uses textarea for editing
 * @param {object} style - Inline styles to apply
 */
export default function EditableText({
    id,
    defaultValue = '',
    tag = 'p',
    className = '',
    multiline = false,
    style = {}
}) {
    const { isEditMode } = useAuth();
    // Use sync version for initial render (from cache/localStorage)
    const [value, setValue] = useState(() => getContentSync(id, defaultValue));
    const [isEditing, setIsEditing] = useState(false);
    const [tempValue, setTempValue] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [saveStatus, setSaveStatus] = useState(null); // 'success' | 'error' | null
    const inputRef = useRef(null);
    const saveTimerRef = useRef(null);

    // Load stored content from Supabase on mount (only re-run when id changes)
    useEffect(() => {
        let cancelled = false;
        const loadContent = async () => {
            const storedValue = await getContent(id, defaultValue);
            if (!cancelled && storedValue !== undefined) {
                setValue(storedValue);
            }
        };
        loadContent();
        return () => { cancelled = true; };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    // Cleanup save status timer on unmount
    useEffect(() => {
        return () => {
            if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
        };
    }, []);

    // Focus input when editing starts
    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
            if (inputRef.current.select) {
                inputRef.current.select();
            }
        }
    }, [isEditing]);

    const startEditing = () => {
        if (!isEditMode) return;
        setSaveStatus(null);
        setTempValue(value);
        setIsEditing(true);
    };

    const saveEdit = async () => {
        setIsSaving(true);
        setSaveStatus(null);

        try {
            const success = await setContent(id, tempValue);

            if (success) {
                setValue(tempValue);
                setIsEditing(false);
                setSaveStatus('success');
            } else {
                // Save failed — keep editing open so user can retry
                setSaveStatus('error');
                console.error(`[EditableText] Error al guardar "${id}" en Supabase. Los datos se guardaron en localStorage como respaldo.`);
            }
        } catch (err) {
            setSaveStatus('error');
            console.error(`[EditableText] Excepción al guardar "${id}":`, err);
        } finally {
            setIsSaving(false);
            // Auto-clear the status after a delay
            if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
            saveTimerRef.current = setTimeout(() => setSaveStatus(null), 3000);
        }
    };

    const cancelEdit = () => {
        setTempValue(value);
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !multiline) {
            e.preventDefault();
            saveEdit();
        }
        if (e.key === 'Escape') {
            cancelEdit();
        }
    };

    // Render the appropriate HTML tag
    const Tag = tag;

    // Save status toast
    const SaveStatusToast = () => {
        if (!saveStatus) return null;
        const isSuccess = saveStatus === 'success';
        return (
            <div
                style={{
                    position: 'fixed',
                    bottom: '80px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10000,
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    fontFamily: "'Inter', sans-serif",
                    color: '#fff',
                    background: isSuccess ? '#16a34a' : '#dc2626',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
                    animation: 'editable-toast-in 0.3s ease-out',
                }}
            >
                {isSuccess ? '✓ Guardado exitosamente' : '✗ Error al guardar — reintenta'}
            </div>
        );
    };

    // If currently editing
    if (isEditing) {
        const inputStyles = {
            ...style,
            background: 'rgba(255, 255, 200, 0.9)',
            border: '2px solid #000',
            padding: '4px 8px',
            width: '100%',
            font: 'inherit',
            color: 'inherit',
            resize: multiline ? 'vertical' : 'none',
        };

        return (
            <>
                <div className="relative inline-block w-full">
                    {multiline ? (
                        <textarea
                            ref={inputRef}
                            value={tempValue}
                            onChange={(e) => setTempValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className={className}
                            style={inputStyles}
                            rows={4}
                            disabled={isSaving}
                        />
                    ) : (
                        <input
                            ref={inputRef}
                            type="text"
                            value={tempValue}
                            onChange={(e) => setTempValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className={className}
                            style={inputStyles}
                            disabled={isSaving}
                        />
                    )}
                    <div className="absolute -top-2 -right-2 flex gap-1">
                        <button
                            onClick={saveEdit}
                            disabled={isSaving}
                            className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors shadow-lg disabled:opacity-50"
                            title="Guardar"
                        >
                            {isSaving ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                                <Check className="w-4 h-4" />
                            )}
                        </button>
                        <button
                            onClick={cancelEdit}
                            disabled={isSaving}
                            className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg disabled:opacity-50"
                            title="Cancelar"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                <SaveStatusToast />
                <style>{`
                    @keyframes editable-toast-in {
                        from { opacity: 0; transform: translateX(-50%) translateY(10px); }
                        to { opacity: 1; transform: translateX(-50%) translateY(0); }
                    }
                `}</style>
            </>
        );
    }

    // Normal display mode (with edit indicator in edit mode)
    return (
        <>
            <Tag
                className={`${className} ${isEditMode ? 'cursor-pointer hover:bg-yellow-100 transition-colors relative group' : ''}`}
                style={style}
                onClick={startEditing}
            >
                {value}
                {isEditMode && (
                    <span className="inline-flex items-center ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Pencil className="w-4 h-4 text-gray-500" />
                    </span>
                )}
            </Tag>
            <SaveStatusToast />
        </>
    );
}
