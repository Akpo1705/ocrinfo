import React, { useEffect, useState } from 'react';
import { getTrainings } from '../../shared/api/trainingApi';

interface Training {
    name: string;
    date: string;
  }

const TrainingList: React.FC = () => {
    const [trainings, setTrainings] = useState<Training[]>([]);
  const [filterDate, setFilterDate] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await getTrainings();
      setTrainings(result);
    };
    fetchData();
  }, []);

  const filteredTrainings = trainings.filter((training) => 
    filterDate === '' || training.date === filterDate
  );

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Список тренировок</h3>
      <input
        type="date"
        value={filterDate}
        onChange={(e) => setFilterDate(e.target.value)}
        className="border p-2 mb-4"
      />
      <ul className="list-disc pl-5">
        {filteredTrainings.map((training, index) => (
          <li key={index}>
            {training.name} - {training.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingList;
