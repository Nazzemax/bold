import React from 'react';
import styles from './TeamSection.module.scss';

const teamMembers = [
  { name: 'Тангар Чочуков', role: 'Генеральный директор', image: '/image/rewr1.png' },
  { name: 'Мажгим Тазабекова', role: 'Бухгалтер', image: '/image/rewr2.png' },
  { name: 'Павел Мун', role: 'Офис менеджер', image: '/image/rewr3.png' },
  { name: 'Усеналиев Шабдан', role: 'Руководитель отдела продаж', image: '/image/rewr4.png' },
  { name: 'Эрнисова Каинкей', role: 'Маркетолог', image: '/image/rewr5.png' },
  { name: 'Искакжанов Тилек', role: 'Руководитель отдела дизайна', image: '/image/rewr6.png' },
  { name: 'Мамбетова Алия', role: 'Руководитель отдела модерации', image: '/image/rewr7.png' },
  { name: 'Тазабек к. Сезим', role: 'Главный бухгалтер', image: '/image/rewr8.png' },
];

const TeamSection = () => {
  return (
    <section className={styles.teamSection}>
        <div className={styles.conteiner}>
        <div className={styles.Team_title}>
      <h2 className={styles.title}>Команда, которой можно доверять</h2>
      <p className={styles.subtitle}>
        Каждый из нас вносит уникальный вклад, помогая вашему бизнесу расти и процветать. Познакомьтесь с людьми, которые превращают идеи в реальность.
      </p>
      </div>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamCard}>
            <img src={member.image} alt={member.name} className={styles.image} />
            <div className={styles.overlay}>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
        </div>
        
    </section>
  );
};

export default TeamSection;
