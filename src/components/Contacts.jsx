import React, { useState } from 'react';
import './Contacts.css';

const Contacts = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    // Здесь можно добавить отправку данных на сервер
  };

  const handleReset = () => {
    setForm({ name: '', phone: '', message: '' });
    setSent(false);
  };

  return (
    <section className="contacts">
      <h2 className="contacts-title">Контакты</h2>
      <div className="custom-form compact-form">
        <div className="custom-form-top">
          <div className="custom-form-title">ЗАПИШИТЕСЬ<br/>НА СЪЁМКУ</div>
          <div className="custom-form-desc">
            Оставьте свои данные — я свяжусь с вами для уточнения деталей и подбора времени.
          </div>
        </div>
        {sent ? (
          <div className="contacts-form-success">Спасибо! Ваше сообщение отправлено.</div>
        ) : (
          <form className="custom-form-fields" onSubmit={handleSubmit} onReset={handleReset}>
            <div className="custom-form-row">
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Ваше сообщение"
              value={form.message}
              onChange={handleChange}
              required
            />
            <div className="custom-form-row">
              <button type="submit">ОТПРАВИТЬ</button>
              <button type="reset" className="custom-form-reset">ОЧИСТИТЬ</button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contacts; 