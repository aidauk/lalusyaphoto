import React from 'react';
import './About.css';

const About = () => (
  <section className="about">
    <div className="about-row">
      <h2 className="about-title">ОБО МНЕ</h2>
      <div className="about-subtitle"><b>Мне нравится фотографировать кого-то прежде, чем они узнают, какие у них красивые углы.</b></div>
    </div>
    <div className="about-grid">
      <div className="about-block about-block1">
        <div className="about-block-text">
          Меня зовут Лаура — я фотограф, видеограф и специалист по продвижению бизнеса в социальных сетях. Работаю в Ташкенте и создаю визуальные истории, которые помогают брендам и личностям выделяться, запоминаться и расти.
        </div>
      </div>
      <div className="about-block about-block2">
        <div className="about-block-text">
          Особое место в моём сердце занимают женские и семейные съёмки. Через объектив я сохраняю в памяти самые тёплые и трогательные моменты жизни. А ещё, я помогаю женщинам примерить на себя новый образ, раскрыться в творчестве и почувствовать себя по-настоящему особенной.
        </div>
      </div>
      <div className="about-block about-block3">
        <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80" alt="about" />
      </div>
      <div className="about-block about-block4">
        <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="about" />
      </div>
    </div>
  </section>
);

export default About; 