import React from 'react';
import RegisterForm from '../components/RegisterForm'


const RegisterPage: React.FC = () => {
    return (

        <div className='flex justify-center items-center h-screen'>
            <div className='w-full max-w-xs'>
                <h2 className='text-center text-2xl font-bold mb-4'>Регистрация</h2>
                <RegisterForm />
            </div>
        </div>
    );
};


export default RegisterPage;