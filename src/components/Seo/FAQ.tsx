"use client";
import React, { useState } from "react";
import styles from "./FAQ.module.scss";
import Image from "next/image";
import arrowDown from "@/public/image/arrow-down.svg";
import arrowUp from "@/public/image/arrow-up.svg";

export const FAQ: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const questions = [
    {
      question: "Сколько времени занимает SEO-оптимизация?",
      answer:
        "SEO — это долгосрочная стратегия. Первые результаты обычно видны через 2-3 месяца, но значимые достижения требуют 6-12 месяцев работы.",
    },
    {
      question: "Можно ли гарантировать выход в топ-1?",
      answer:
        "Гарантировать точный выход в топ-1 нельзя, так как поисковые алгоритмы зависят от множества факторов. Однако правильная стратегия может значительно улучшить позиции.",
    },
    {
      question: "Сколько стоит SEO-продвижение?",
      answer:
        "Стоимость SEO-продвижения зависит от уровня конкуренции, объема работ и поставленных целей. Мы подбираем индивидуальные решения для каждого проекта.",
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
                openQuestion === index ? styles.open : ""
              }`}
              onClick={() => toggleQuestion(index)}
            >
              <div className={styles.question}>
                <span>{item.question}</span>
                <Image
                  src={openQuestion === index ? arrowUp : arrowDown}
                  alt="Arrow Icon"
                  width={24}
                  height={24}
                  className={`${styles.icon} ${
                    openQuestion === index ? styles.open : ""
                  }`}
                />
              </div>
              <div
                className={`${styles.answer} ${
                  openQuestion === index ? styles.open : ""
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
