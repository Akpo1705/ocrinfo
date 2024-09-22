import React, { useState } from 'react';
import { addTraining } from '../../shared/api/trainingApi';

const TrainingAdd: React.FC = () => {
  const [training, setTraining] = useState('');
  const [date, setDate] = useState('');

  const handleAddTraining = async () => {
    await addTraining(training, date);
    setTraining('');
    setDate('');
    // Возможно, добавить обновление списка после добавления
  };

  return (
    <div className="my-4">
      <input
        type="text"
        value={training}
        onChange={(e) => setTraining(e.target.value)}
        className="border p-2 mr-2"
        placeholder="Название тренировки"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={handleAddTraining} className="bg-blue-500 text-white px-4 py-2 rounded">
        Добавить тренировку
      </button>
    </div>
  );
};

export default TrainingAdd;
