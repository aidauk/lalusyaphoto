import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <nav className="nav">
      <ul>
        <li><a href="#about">Обо мне</a></li>
        <li><a href="#portfolio">Портфолио</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#contacts">contacts</a></li>
      </ul>
    </nav>
  </header>
);

export default Header; 