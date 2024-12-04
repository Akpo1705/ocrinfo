import React from 'react';

const TrainingList: React.FC = () => {
  const trainings = ['Бег 5 км', 'Силовая тренировка', 'Плавание'];

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Список тренировок</h3>
      <ul className="list-disc pl-5">
        {trainings.map((training, index) => (
          <li key={index}>{training}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingList;
