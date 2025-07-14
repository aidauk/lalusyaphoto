import React from 'react';
import './Gallery.css';

const galleryItems = [
  { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', caption: 'Портретная съёмка' },
  { src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', caption: 'Fashion' },
  { src: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', caption: 'Студия' },
  { src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80', caption: 'Пейзажи' },
];

const Gallery = () => (
  <section className="gallery">
    <h2>@ALINAKOVAL</h2>
    <div className="gallery-grid">
      {galleryItems.map((item, i) => (
        <div className="gallery-item" key={i}>
          <img src={item.src} alt={item.caption} />
          <div className="gallery-caption">{item.caption}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Gallery; 