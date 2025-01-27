import React from 'react';
import styles from './ApproachSection.module.scss';
import imageApproach from '@/public/image/image.png'
import Image from "next/image";

const ApproachSection: React.FC = () => {
  
  const items = [
    {
      title: 'Погружение в ваш бизнес',
      description:
        'Анализируем рынок, изучаем конкурентов, выявляем особенности вашей целевой аудитории. Вместе с вами формируем цели продвижения.',
      image: imageApproach,
      reverse: false,
    },
    {
      title: 'Разработка стратегии',
      description:
        'Создаем уникальную SMM-стратегию, которая выделяет ваш бренд и приносит реальные результаты.',
      image: imageApproach,
      reverse: false,
    },
    {
      title: 'Создание контента',
      description:
        'Креатив-команда: мобильограф, копирайтер и дизайнер — разрабатывает визуалы и тексты, которые привлекают внимание и побуждают к покупкам.',
      image: imageApproach,
      reverse: false,
    },
    {
        title: 'Создание контента',
        description:
          'Креатив-команда: мобильограф, копирайтер и дизайнер — разрабатывает визуалы и тексты, которые привлекают внимание и побуждают к покупкам.',
        image: imageApproach,
        reverse: false,
      },
      {
        title: 'Создание контента',
        description:
          'Креатив-команда: мобильограф, копирайтер и дизайнер — разрабатывает визуалы и тексты, которые привлекают внимание и побуждают к покупкам.',
        image: imageApproach,
        reverse: false,
      },
      {
        title: 'Создание контента',
        description:
          'Креатив-команда: мобильограф, копирайтер и дизайнер — разрабатывает визуалы и тексты, которые привлекают внимание и побуждают к покупкам.',
        image: imageApproach,
        reverse: false,
      },
      {
        title: 'Создание контента',
        description:
          'Креатив-команда: мобильограф, копирайтер и дизайнер — разрабатывает визуалы и тексты, которые привлекают внимание и побуждают к покупкам.',
        image: imageApproach,
        reverse: false,
      },
  ];

  return (
    <section className={styles.approachSection}>
        <div className={styles.container1}>
        <h2 className={styles.title}>
        Подход, который выделит ваш бренд среди конкурентов
      </h2>
      <div className={styles.container}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${item.reverse ? styles.reverse : ''}`}
          >
            <Image
              src={item.image}
              alt={item.title}
              className={styles.image}
            />
            <div className={styles.text}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
        </div>
     
    </section>
  );
};

export default ApproachSection;
