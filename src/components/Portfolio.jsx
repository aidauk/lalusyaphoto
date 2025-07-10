import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Portfolio.css';
import Lightbox from './Lightbox';

const categories = [
  { key: 'portrait', label: 'Женский портрет' },
  { key: 'family', label: 'Семейная фотосессия' },
  { key: 'lookbook', label: 'Lookbook' },
];

const images = {
  portrait: [
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
  ],
  family: [
    'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=600&q=80',
  ],
  lookbook: [
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  ],
};

const Portfolio = () => {
  const [active, setActive] = useState('portrait');
  const [lightbox, setLightbox] = useState({ open: false, src: '' });
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="portfolio" id="portfolio">
      <h2>Портфолио</h2>
      <div className="portfolio-tabs">
        {categories.map(cat => (
          <button
            key={cat.key}
            className={active === cat.key ? 'active' : ''}
            onClick={() => setActive(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="portfolio-slider">
        <button className="portfolio-arrow prev" ref={prevRef} aria-label="Назад">&#8592;</button>
        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onInit={swiper => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
          }}
        >
          {images[active].map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                alt={categories.find(c => c.key === active).label + ' ' + (i+1)}
                loading="lazy"
                onClick={() => setLightbox({ open: true, src })}
                className="portfolio-slide-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="portfolio-arrow next" ref={nextRef} aria-label="Вперёд">&#8594;</button>
      </div>
      {/* Lightbox */}
      {lightbox.open && (
        <Lightbox
          src={lightbox.src}
          alt={categories.find(c => c.key === active).label}
          onClose={() => setLightbox({ open: false, src: '' })}
        />
      )}
    </section>
  );
};

export default Portfolio; 