import React, { useEffect } from 'react';
import './Lightbox.css';

const Lightbox = ({ src, alt, onClose }) => {
  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [onClose]);

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-content" onClick={e => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Закрыть">×</button>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default Lightbox; 