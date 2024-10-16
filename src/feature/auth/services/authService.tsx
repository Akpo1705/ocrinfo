export const login = async (email: string, password: string) => {
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
    });


    if (!response.ok) {
        throw new Error('Неверные учетные данные');
    }

    return response.json();
};


export const register = async (email: string, password: string) => {
    const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error('Ошибка регистрации');
    }

    return response.json();
};