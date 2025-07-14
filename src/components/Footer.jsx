import React from 'react';
import './Footer.css';

const TelegramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign:'middle',marginRight:'0.5em'}}>
    <path d="M21.75 3.75L2.25 10.5l5.25 2.25L18 7.5l-7.5 7.5v3l3-2.25 4.5 3.75 3.75-15z" fill="#229ED9"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign:'middle',marginRight:'0.5em'}}>
    <rect x="2" y="2" width="20" height="20" rx="6" fill="#fff" stroke="#FF4D4D" strokeWidth="2"/>
    <circle cx="12" cy="12" r="5" stroke="#FF4D4D" strokeWidth="2"/>
    <circle cx="17" cy="7" r="1.2" fill="#FF4D4D"/>
  </svg>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <nav className="footer-nav">
        <a href="#portfolio">Портфолио</a>
        <a href="#about">Обо мне</a>
        <a href="#steps">Услуги</a>
      </nav>
      <div className="footer-contact-vertical">
        <a href="mailto:Sheralievalaura1998@gmail.com" className="footer-link">📧 Sheralievalaura1998@gmail.com</a>
        <a href="https://t.me/lalusyaphoto" target="_blank" rel="noopener noreferrer" className="footer-link"><TelegramIcon />Telegram</a>
        <a href="https://www.instagram.com/lalusya.photo/" target="_blank" rel="noopener noreferrer" className="footer-link"><InstagramIcon />Instagram</a>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2025 Created by Aida</span>
    </div>
  </footer>
);

export default Footer; 