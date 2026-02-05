import { createContext, useContext, useState, useEffect } from 'react';

// Auth configuration - Multiple users with same permissions
const ADMIN_CREDENTIALS = [
    {
        username: 'admin',
        password: 'Lnc2026!',
        role: 'admin'
    },
    {
        username: 'direccion',
        password: 'Dir2026Lnc!',
        role: 'admin'  // Same permissions as admin
    }
];

const AUTH_KEY = 'lnc_admin_auth';
const EDIT_MODE_KEY = 'lnc_edit_mode';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Check for existing session on mount
    useEffect(() => {
        const savedAuth = localStorage.getItem(AUTH_KEY);
        const savedEditMode = localStorage.getItem(EDIT_MODE_KEY);

        if (savedAuth === 'true') {
            setIsAuthenticated(true);
            setIsEditMode(savedEditMode === 'true');
        }
        setIsLoading(false);
    }, []);

    // Login function
    const login = (username, password) => {
        const user = ADMIN_CREDENTIALS.find(
            cred => cred.username === username && cred.password === password
        );

        if (user) {
            setIsAuthenticated(true);
            localStorage.setItem(AUTH_KEY, 'true');
            return { success: true };
        }
        return { success: false, error: 'Credenciales incorrectas' };
    };

    // Logout function
    const logout = () => {
        setIsAuthenticated(false);
        setIsEditMode(false);
        localStorage.removeItem(AUTH_KEY);
        localStorage.removeItem(EDIT_MODE_KEY);
    };

    // Toggle edit mode
    const toggleEditMode = () => {
        const newMode = !isEditMode;
        setIsEditMode(newMode);
        localStorage.setItem(EDIT_MODE_KEY, String(newMode));
    };

    const value = {
        isAuthenticated,
        isEditMode,
        isLoading,
        login,
        logout,
        toggleEditMode
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
