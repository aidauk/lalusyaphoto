import React from 'react';
import './About.css';

const About = () => (
  <section className="about" id="about">
    <div className="about-content">
      <div className="about-text">
        <h2>Обо мне</h2>
        <p><span className="about-name">My name is Laura Sheralieva.</span> Я профессиональный фотограф, специализируюсь на портретной, семейной и fashion-фотосъёмке. Мой стиль — минимализм, внимание к деталям и естественная красота. Опыт работы — более 7 лет.</p>
      </div>
      <div className="about-photo">
        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80" alt="Laura Sheralieva" loading="lazy" />
      </div>
    </div>
  </section>
);

export default About; 