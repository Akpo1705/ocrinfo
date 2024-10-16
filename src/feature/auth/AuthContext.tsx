import React, { createContext, useContext, useState } from 'react';
import { login as loginService, register as registerService } from "./services/authService"

interface AuthContextType {
    user: any;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [user, setUser] = useState(null);

    const login = async (email: string, password: string) => {
        const userData = await loginService(email, password);
        setUser(userData);
    };

    const register = async (email: string, password: string) => {
        const userData = await registerService(email, password);
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );

};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};