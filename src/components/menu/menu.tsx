// src/components/menu/menu.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white">Главная</Link>
        </li>
        {process.env.REACT_APP_DEV === 'true' && (
          <li>
            <Link to="/training" className="text-white">Тренировки</Link>
          </li>
        )}
        <li>
          <Link to="/about" className="text-white">О нас</Link>
        </li>
        {/* Добавьте другие ссылки по необходимости */}
      </ul>
    </nav>
  );
};

export default Menu;
