import React from 'react';
import './Steps.css';

const steps = [
  { num: 1, title: 'Знакомство', desc: 'Обсуждаем ваши пожелания, идеи и стиль съёмки.' },
  { num: 2, title: 'Съёмка', desc: 'Проводим фотосессию в выбранной локации или студии.' },
  { num: 3, title: 'Обработка', desc: 'Я отбираю и обрабатываю лучшие кадры, готовлю финальные фото.' },
];

const Steps = () => (
  <section className="steps">
    <h2>Этапы работы</h2>
    <p className="steps-intro">Каждая фотосессия — это индивидуальный процесс, в котором я сопровождаю клиента на всех этапах: от идеи до готовых снимков.</p>
    <table className="steps-table">
      <thead>
        <tr>
          <th>№</th>
          <th>Этап</th>
          <th>Описание</th>
        </tr>
      </thead>
      <tbody>
        {steps.map(step => (
          <tr key={step.num}>
            <td>{step.num}</td>
            <td>{step.title}</td>
            <td>{step.desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

export default Steps; 