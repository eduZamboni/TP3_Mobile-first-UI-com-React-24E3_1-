import React, { useState } from 'react';
import './Menu.css';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="menu-container">
      <div className="menu-logo">
        <img src="https://via.placeholder.com/150x40?text=Logo" alt="Logo do App" className="logo-image" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? 'Fechar' : 'Menu'}
      </button>
      <ul className={`menu-items ${isOpen ? 'menu-open' : ''}`}>
        <li>Home</li>
        <li>Serviços</li>
        <li>Produtos</li>
        <li>Sobre nós</li>
        <li>Contatos</li>
      </ul>
    </nav>
  );
}