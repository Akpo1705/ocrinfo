import React from 'react';
import TrainingAdd from '../../feature/trainingAdd/trainingAdd';
import TrainingList from '../../feature/trainingList/trainingList';
import TrainingCalendar from '../../feature/trainingCalendare/trainingCalendare';

const Training: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Тренировки</h2>
      <TrainingCalendar />
      <TrainingAdd />
    </div>
  );
};

export default Training;
