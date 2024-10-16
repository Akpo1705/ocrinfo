import React, { useState } from 'react'
import { useAuth } from '../AuthContext';



const LoginForm: React.FC = () => {

    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(email, password);
        } catch (err: any) {
            setError(err.message || 'Ошибка при входе');
        }
    };

    return (

        <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-read-500">{error}</p>}

            <input type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='email'
                className='border p-2 w-full'
                required
            />

            <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                className='border p-2 w-full'
                required
            />

            <button type="submit" className="bg-blue-500 text-white p-2 w-full"></button>
        </form>

    );
};


export default LoginForm;