import React, { useState } from 'react';
import { useAuth } from '../AuthContext';


const RegisterForm: React.FC = () => {

    const { register } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await register(email, password);
        } catch (err: any) {
            setError(err.message || 'Ошибка регистрации ');
        }
    }

    return (
        <form onSubmit={handleSubmit} className='space-y-4'>
            {error && <p className='text-red-500'>{error}</p>}
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='email'
                className='border p-2 w-full'
                required
            />

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password'
                className='border p-2 w-full'
                required
            />

            <button type="submit" className='bg-gren-500 text-white p-2 w-full'> Регистрация</button>
        </form>
    );
}


export default RegisterForm;