import React from "react";
import styles from "./MarketingSection.module.scss";
import Image from "next/image";
import frame from "@/public/icons/frame.svg";
const features = [
  {
    number: "01",
    text: "Создаём уникальные решения под ваш бизнес",
    icon: frame,
  },
  {
    number: "02",
    text: "Придаём больше прозрачности и управляемости бизнесу",
    icon: frame,
  },
  {
    number: "03",
    text: "Достигаем устойчивых финансовых результатов",
    icon: frame,
  },
];

const MarketingSection = () => {
  return (
    <div className={styles.Marketing}>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1>Bold Brands International ваш внешний отдел маркетинга</h1>
          </div>
          <div className={styles.description}>
            <p>
              Мы понимаем особенности бизнеса в Центральной Азии и помогаем
              компаниям расти.
            </p>
          </div>
        </div>
        <div className={styles.featuresContainer}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <span className={styles.number}>{feature.number}</span>
              <div className={styles.title}>
                <p>{feature.text}</p>
                <Image
                  src={feature.icon}
                  alt="icon"
                  width={20}
                  height={20}
                  className={styles.icon}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MarketingSection;
