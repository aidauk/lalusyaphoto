import React, { useState } from 'react';
import './Portfolio.css';

const portfolioData = [
  {
    title: 'Женский портрет',
    thumb: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80',
    ]
  },
  {
    title: 'Семейная фотосессия',
    thumb: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    ]
  },
  {
    title: 'Фуд съемка',
    thumb: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', // клубника
      '/images/food-custom.jpg', // пользовательское фото
    ]
  },
  {
    title: 'Продвижение бизнеса',
    thumb: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    ]
  },
];

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [activeIdx, setActiveIdx] = useState(0);

  const openGallery = (images) => {
    setGallery(images);
    setActiveIdx(0);
    setOpen(true);
  };

  const closeGallery = () => setOpen(false);

  const nextImg = () => setActiveIdx((idx) => (idx + 1) % gallery.length);
  const prevImg = () => setActiveIdx((idx) => (idx - 1 + gallery.length) % gallery.length);

  return (
    <section className="portfolio">
      <h2 className="portfolio-title-centered">Мое портфолио</h2>
      <div className="portfolio-grid-full">
        {portfolioData.map((item, i) => (
          <div className={`portfolio-item portfolio-item${i+1}`} key={i} onClick={() => openGallery(item.gallery)}>
            <span className="portfolio-caption">{item.title}</span>
            <img src={item.thumb} alt={item.title} />
          </div>
        ))}
      </div>
      {open && (
        <div className="portfolio-lightbox" onClick={closeGallery}>
          <div className="portfolio-lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="portfolio-lightbox-close" onClick={closeGallery}>&times;</button>
            <img src={gallery[activeIdx]} alt="Пример работы" />
            <div className="portfolio-lightbox-controls">
              <button onClick={prevImg}>&lt;</button>
              <span>{activeIdx+1} / {gallery.length}</span>
              <button onClick={nextImg}>&gt;</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio; 