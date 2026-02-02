import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { Lock, User, Eye, EyeOff, AlertCircle } from 'lucide-react';

export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { login, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    // Redirect if already authenticated
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        // Simulate slight delay for UX
        await new Promise(resolve => setTimeout(resolve, 300));

        const result = login(username, password);

        if (result.success) {
            navigate('/');
        } else {
            setError(result.error);
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-10">
                    <img
                        src="/logo.png"
                        alt="La New Cuisine"
                        className="h-16 mx-auto mb-6"
                    />
                    <h1 className="text-2xl font-serif font-bold text-black">
                        Panel de Administración
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Ingresa tus credenciales para continuar
                    </p>
                </div>

                {/* Login Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white border border-gray-200 p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 flex items-center gap-3 text-red-700">
                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                            <span className="text-sm">{error}</span>
                        </div>
                    )}

                    {/* Username Field */}
                    <div className="mb-6">
                        <label
                            htmlFor="username"
                            className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2"
                        >
                            Usuario
                        </label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border-2 border-black bg-white text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all"
                                placeholder="Ingresa tu usuario"
                                required
                                autoComplete="username"
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="mb-8">
                        <label
                            htmlFor="password"
                            className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2"
                        >
                            Contraseña
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-12 pr-12 py-3 border-2 border-black bg-white text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all"
                                placeholder="Ingresa tu contraseña"
                                required
                                autoComplete="current-password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                            >
                                {showPassword ? (
                                    <EyeOff className="w-5 h-5" />
                                ) : (
                                    <Eye className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-black text-white font-bold uppercase tracking-wider hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        {isSubmitting ? 'Ingresando...' : 'Ingresar'}
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-gray-400 text-sm mt-8">
                    © {new Date().getFullYear()} La New Cuisine. Todos los derechos reservados.
                </p>
            </div>
        </div>
    );
}
