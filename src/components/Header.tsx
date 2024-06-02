// src/components/Header.tsx
import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header rounded-lg flex items-center justify-center shadow-md p-2 mb-4">
      <img src="/public/mainlogo.svg" alt="Logo" className="logo" />
    </header>
  );
}

export default Header;
