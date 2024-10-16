// Ваша страница логина
import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-xs">
                <h2 className="text-center text-2xl font-bold mb-4">Вход</h2>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
