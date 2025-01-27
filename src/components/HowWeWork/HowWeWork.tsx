import React from "react";
import styles from "./HowWeWork.module.scss";
import Image from "next/image";
import researchIcon from "@/src/assents/icon/research_1.png";
import strateqyIcon from "@/src/assents/icon/strategy_1.png";
import data from "@/src/assents/icon/data_1.png";
import analytics from "@/src/assents/icon/analytics_1.png";
import data_analytics from '@/src/assents/icon/data_analytics_1.png'



export const HowWeWork = () => {
  const steps = [
    {
      id: 1,
      title: (
        <>
          Исследование <br /> и анализ
        </>
      ),
      description:
        "Погружаемся в специфику вашего рынка, изучаем сильные и слабые стороны конкурентов.",
        Number: '01',
      icon: researchIcon, 
    },
    {
      id: 2,
      title: "Разработка индивидуальной стратегии",
      description:
        "Создаем план действий, учитывая особенности вашего бизнеса и цели.",
        Number: '02',
      icon: strateqyIcon, // Add appropriate icon here if needed
    },
    {
        id: 3,
        title: "Разработка индивидуальной стратегии",
        description:
          "Проводим техническую и контентную оптимизацию, работаем над внешними факторами ранжирования.",
          Number: '03',
        icon: data, // Add appropriate icon here if needed
      },
      {
        id: 4,
        title: "Разработка индивидуальной стратегии",
        description:
          "Регулярно предоставляем отчеты о проделанной работе и достигнутых результатах",
          Number: '04',
        icon: analytics, // Add appropriate icon here if needed
      },
      {
        id: 5,
        title: "Разработка индивидуальной стратегии",
        description:
          "Адаптируем стратегию в соответствии с изменениями алгоритмов поисковых систем и рыночными тенденциями",
          Number: '05',
        icon: data_analytics, // Add appropriate icon here if needed
      },
  ];

  return (
    <section className={styles.howWeWork}>
      <div className={styles.container}>
        <div className={styles.titleblog}>
        <h2 className={styles.heading}>Как мы работаем</h2>
        <button className={styles.button}>
            Получить консультацию
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={styles.arrow}
            >
                <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M5 12h14m-6-6l6 6-6 6"
                />
            </svg>
            </button>
        </div>
        
        <div className={styles.stepsGrid}>
          {steps.map((step) => (
            <div key={step.id} className={styles.stepCard}>
              <div className={styles.blog_info}>
                <div className={styles.icon_blog}>
                  
                  {step.icon && (
                    <Image
                      src={step.icon}
                      alt={step.title}
                      className={styles.icon}

                    />
                  )}
                </div>
                <div className={styles.blog_titleinfo}>
                <p className={styles.stepNumber}>{step.Number}</p>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
