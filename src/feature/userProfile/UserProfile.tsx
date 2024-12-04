import React from 'react';

const UserProfile: React.FC = () => {
  // Здесь будет отображаться информация о пользователе и его тренировках
  return (
    <div>
      <h2 className="text-2xl font-bold">Профиль пользователя</h2>
      <p>Имя: User1</p>
      <p>Всего тренировок: 5</p>
      {/* Дополнительная информация */}
    </div>
  );
};

export default UserProfile;
