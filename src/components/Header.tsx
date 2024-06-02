// src/components/Header.tsx
import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header rounded-lg flex items-center justify-center shadow-md p-2 mb-4">
      <img src="https://cdn.glitch.global/aa79ffb0-a51d-42d4-9917-5937fae9ff98/mainlogo.svg" alt="Trợ Lý Nông Nghiệp" className="logo" />
    </header>
  );
}

export default Header;
