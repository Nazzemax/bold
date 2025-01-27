// BusinessResults.tsx
import React from "react";
import styles from "./BusinessResults.module.scss";
import Image from 'next/image';
import imageResults from '@/public/image/image.png'
import iconBrain from '@/public/image/Frame7.png'

const BusinessResults: React.FC = () => {
  return (
    <div className={styles.BusinessResults}>
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Результаты, которые работают на ваш бизнес</h1>
        <p>
          Мы понимаем, что для предпринимателей важны не просто идеи, а измеримые
          результаты — рост заявок, привлечение клиентов и увеличение прибыли.
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.philosophy}>
          <div className={styles.icon}>
          <Image
            src= {iconBrain}
            alt=""
          />
          </div>
          <div className={styles.text}>
            <h2>Наша философия</h2>
            <p>
              Работать для вашего успеха, предлагая стратегии, которые решают именно
              ваши бизнес-задачи и обеспечивают конкретные достижения.
            </p>
          </div>
        </div>
        <div className={styles.image}>
          <Image
            src= {imageResults}
            alt="Команда объединяет руки"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default BusinessResults;
