import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { exportContent, importContent } from '../utils/contentStore';
import { Pencil, PencilOff, Download, Upload, LogOut, Settings } from 'lucide-react';

export default function AdminToolbar() {
    const { isAuthenticated, isEditMode, toggleEditMode, logout } = useAuth();
    const [showMenu, setShowMenu] = useState(false);
    const [importStatus, setImportStatus] = useState('');

    if (!isAuthenticated) {
        return null;
    }

    const handleExport = async () => {
        const content = await exportContent();
        const blob = new Blob([content], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `lnc-content-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        setShowMenu(false);
    };

    const handleImport = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = async (e) => {
            const file = e.target.files[0];
            if (file) {
                try {
                    const text = await file.text();
                    const success = await importContent(text);
                    if (success) {
                        setImportStatus('✓ Contenido importado');
                        setTimeout(() => {
                            setImportStatus('');
                            window.location.reload();
                        }, 1500);
                    } else {
                        setImportStatus('✗ Error al importar');
                        setTimeout(() => setImportStatus(''), 3000);
                    }
                } catch (error) {
                    setImportStatus('✗ Error al leer archivo');
                    setTimeout(() => setImportStatus(''), 3000);
                }
            }
        };
        input.click();
        setShowMenu(false);
    };

    const handleLogout = () => {
        logout();
        setShowMenu(false);
    };

    return (
        <>
            {/* Main Floating Toolbar */}
            <div
                className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3"
                style={{ fontFamily: "'Inter', sans-serif" }}
            >
                {/* Import Status Message */}
                {importStatus && (
                    <div className="px-4 py-2 bg-black text-white text-sm rounded-lg shadow-lg animate-fade-in">
                        {importStatus}
                    </div>
                )}

                {/* Edit Mode Toggle */}
                <button
                    onClick={toggleEditMode}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg transition-all ${isEditMode
                        ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                        : 'bg-black text-white hover:bg-gray-800'
                        }`}
                    title={isEditMode ? 'Desactivar modo edición' : 'Activar modo edición'}
                >
                    {isEditMode ? (
                        <>
                            <PencilOff className="w-4 h-4" />
                            <span>Modo Edición ON</span>
                        </>
                    ) : (
                        <>
                            <Pencil className="w-4 h-4" />
                            <span>Modo Edición</span>
                        </>
                    )}
                </button>

                {/* Settings Menu Button */}
                <div className="relative">
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
                        title="Opciones"
                    >
                        <Settings className="w-5 h-5" />
                    </button>

                    {/* Dropdown Menu */}
                    {showMenu && (
                        <>
                            {/* Backdrop */}
                            <div
                                className="fixed inset-0 z-[9998]"
                                onClick={() => setShowMenu(false)}
                            />

                            {/* Menu */}
                            <div className="absolute bottom-full right-0 mb-2 w-48 bg-white border-2 border-black rounded-lg shadow-xl overflow-hidden z-[9999]">
                                <button
                                    onClick={handleExport}
                                    className="w-full px-4 py-3 text-left text-sm font-medium hover:bg-gray-100 flex items-center gap-3 transition-colors"
                                >
                                    <Download className="w-4 h-4" />
                                    Exportar Contenido
                                </button>
                                <button
                                    onClick={handleImport}
                                    className="w-full px-4 py-3 text-left text-sm font-medium hover:bg-gray-100 flex items-center gap-3 transition-colors border-t border-gray-200"
                                >
                                    <Upload className="w-4 h-4" />
                                    Importar Contenido
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="w-full px-4 py-3 text-left text-sm font-medium text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors border-t border-gray-200"
                                >
                                    <LogOut className="w-4 h-4" />
                                    Cerrar Sesión
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Edit Mode Indicator Banner */}
            {isEditMode && (
                <div className="fixed top-0 left-0 right-0 z-[9998] bg-yellow-400 text-black text-center py-2 text-sm font-bold uppercase tracking-wider shadow-md">
                    ✏️ Modo Edición Activo - Haz clic en cualquier texto para editarlo
                </div>
            )}

            <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
        </>
    );
}
