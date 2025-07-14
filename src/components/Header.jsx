import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="header-bg">
      <img src="https://via.placeholder.com/1200x500?text=Header+Photo" alt="Главное фото" />
      <div className="header-overlay" />
      <div className="header-content">
        <a href="https://www.instagram.com/lalusya.photo/" target="_blank" rel="noopener noreferrer" className="header-nickname">@lalusya.photo</a>
        <div className="header-desc">Моя цель — не просто сделать красивую картинку, а передать настроение, глубину и настоящее чувство стиля.</div>
        <a href="#contacts" className="header-cta">Записаться на съёмку</a>
      </div>
    </div>
  </header>
);

export default Header; 