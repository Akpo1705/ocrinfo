import React, { useState } from 'react';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const TrainingCalendar: React.FC = () => {
  const [date, setDate] = useState<Date | Date[] | null>(new Date());

  const handleDateChange: CalendarProps['onChange'] = (value) => {
    //setDate(value);
  };

  return (
    <div className="my-4">
      <h3 className="text-xl font-bold mb-2">Календарь тренировок</h3>
      <Calendar onChange={handleDateChange} />
    </div>
  );
};

export default TrainingCalendar;
