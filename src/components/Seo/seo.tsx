'use client';
import React, { useState } from 'react';
import styles from './seo.module.scss';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const questions = [
    {
      question: 'Сколько времени занимает SEO-оптимизация?',
      answer: (
        <>
          SEO — это долгосрочная стратегия. Первые результаты обычно видны
          <br /> через 2-3 месяца, но значимые достижения требуют 6-12 месяцев
          работы.
        </>
      ),
    },
    {
      question: 'Можно ли гарантировать выход в топ-1?',
      answer: (
        <>
          SEO — это долгосрочная стратегия. Первые результаты обычно видны
          <br /> через 2-3 месяца, но значимые достижения требуют 6-12 месяцев
          работы.
        </>
      ),
    },
    {
      question: 'Сколько стоит SEO-продвижение?',
      answer: (
        <>
          SEO — это долгосрочная стратегия. Первые результаты обычно видны
          <br /> через 2-3 месяца, но значимые достижения требуют 6-12 месяцев
          работы.
        </>
      ),
    },
  ];

  return (
    <div className={styles.seo}>
      <div className={styles.faqContainer}>
        <h1 className={styles.title}>Часто задаваемые вопросы</h1>
        <div className={styles.questionsList}>
          {questions.map((item, index) => (
            <div
              key={index}
              className={`${styles.questionItem} ${
                openQuestion === index ? styles.open : ''
              }`}
              onClick={() => toggleQuestion(index)}
            >
              <div className={styles.seo_question}>
                <div className={styles.question}>
                  {item.question}
                  <span
                    className={`${styles.icon} ${
                      openQuestion === index ? styles.open : ''
                    }`}
                  >
                    {openQuestion === index ? '▲' : '▼'}
                  </span>
                </div>
                <div
                  className={`${styles.answer} ${
                    openQuestion === index ? styles.open : ''
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
