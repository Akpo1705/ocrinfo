// src/components/Menu.tsx
import React, { useState } from 'react';

interface MenuItem {
  label: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

const Menu: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>(menuItems[0].path);

  const handleItemClick = (path: string) => {
    setActiveItem(path);
  };

  return (
    <nav>
      <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
        {menuItems.map((item) => (
          <li key={item.path} style={{ margin: '0 15px' }}>
            <a
              href={item.path}
              onClick={() => handleItemClick(item.path)}
              style={{
                textDecoration: 'none',
                color: activeItem === item.path ? 'blue' : 'black',
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;