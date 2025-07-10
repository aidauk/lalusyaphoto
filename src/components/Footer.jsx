import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-main">
      <div className="footer-logo">lalusya.photo</div>
      <nav className="footer-nav">
        <ul>
          <li><a href="#about">обо мне</a></li>
          <li><a href="#portfolio">портфолио</a></li>
          <li>
            <a href="#services">services</a>
            <ul className="footer-submenu">
              <li><a href="#studio">studio services</a></li>
              <li><a href="#local">local shootings</a></li>
              <li><a href="#pricing">pricing</a></li>
              <li><a href="#prints">prints</a></li>
            </ul>
          </li>
          <li><a href="#contacts">контакты</a></li>
        </ul>
      </nav>
    </div>
    <div className="footer-bottom">
      This website was created by Aida © 2025
    </div>
  </footer>
);

export default Footer; 