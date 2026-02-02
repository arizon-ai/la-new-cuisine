import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { getContent, setContent } from '../utils/contentStore';
import { Pencil, Check, X } from 'lucide-react';

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
    const [value, setValue] = useState(defaultValue);
    const [isEditing, setIsEditing] = useState(false);
    const [tempValue, setTempValue] = useState('');
    const inputRef = useRef(null);

    // Load stored content on mount
    useEffect(() => {
        const storedValue = getContent(id, defaultValue);
        setValue(storedValue);
    }, [id, defaultValue]);

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
        setTempValue(value);
        setIsEditing(true);
    };

    const saveEdit = () => {
        setValue(tempValue);
        setContent(id, tempValue);
        setIsEditing(false);
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
                    />
                )}
                <div className="absolute -top-2 -right-2 flex gap-1">
                    <button
                        onClick={saveEdit}
                        className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors shadow-lg"
                        title="Guardar"
                    >
                        <Check className="w-4 h-4" />
                    </button>
                    <button
                        onClick={cancelEdit}
                        className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg"
                        title="Cancelar"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>
        );
    }

    // Normal display mode (with edit indicator in edit mode)
    return (
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
    );
}
