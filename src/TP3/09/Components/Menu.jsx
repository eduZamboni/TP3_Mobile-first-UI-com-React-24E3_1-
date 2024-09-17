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
        <h1>Meu App</h1>
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