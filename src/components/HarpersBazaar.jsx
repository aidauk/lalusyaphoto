import React from 'react';
import './HarpersBazaar.css';

const brands = [
  'ELLE',
  'VOGUE',
  'ALLURE',
  'NUMERO',
  'ESSENCE',
  'MARIE CLAIRE',
];

const HarpersBazaar = () => (
  <section className="harpers" id="harpers">
    <h2>HARPER'S BAZAAR</h2>
    <div className="harpers-content">
      <ul className="harpers-brands">
        {brands.map(b => <li key={b}>{b}</li>)}
      </ul>
      <div className="harpers-gallery">
        <img className="harpers-img-square" src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Harper's Bazaar 1" loading="lazy" />
        <img className="harpers-img-square" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Harper's Bazaar 2" loading="lazy" />
      </div>
    </div>
  </section>
);

export default HarpersBazaar; 