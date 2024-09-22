const API_URL = 'http://localhost:5000/trainings';

export const getTrainings = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const addTraining = async (name: string, date: string) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, date })
  });
  return response.json();
};
