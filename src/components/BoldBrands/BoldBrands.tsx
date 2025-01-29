"use client";
import React from "react";
import styles from "./BoldBrands.module.scss";
import Image from "next/image";

// Проверяем правильность путей
import circle1 from "@/public/image/Frame_48.png";
import circle2 from "@/public/image/Frame_49.png";
import circle3 from "@/public/image/Frame_50.png";
import circle4 from "@/public/image/Frame_51.png";

const statsData = [
  [
    {
      value: "30+",
      description: "опытных экспертов, которые работают на ваш результат",
      image: circle1,
    },
    {
      value: "Топ-1",
      description:
        "маркетинговая компания по версии The Great Award of the Year 2023 за выдающиеся достижения в продвижении бизнеса.",
      image: circle2,
    },
  ],
  [
    {
      value: "60+",
      description: "успешных проектов, которые помогли нашим клиентам увеличивать продажи на 189%.",
      image: circle3,
    },
    {
      value: "35+",
      description: "опыт в отраслях бизнеса — от салонов красоты до строительных компаний.",
      image: circle4,
    },
  ],
];

const BoldBrands = ({ backgroundImage }) => {
  return (
    <section
    
      className={styles.section}
      
    >
      <div className={styles.container}>
        <div className={styles.block_title}>
        <h1 className={styles.title}>Bold Brands International</h1>
        <p className={styles.subtitle}>
          Совместно создаём прочную основу и уверенное будущее для вашей компании
        </p>
        </div>
        <div className={styles.blocksContainer}>
          {statsData.map((block, blockIndex) => (
            <div key={blockIndex} className={`${styles.statsBlock} ${blockIndex % 2 === 0 ? styles.leftBlock : styles.rightBlock}`}>
              {block.map((stat, index) => (
                <div key={index} className={styles.statCard}>
                  <div className={styles.circleWrapper}>
                    {/* Проверяем, загружено ли изображение */}
                    {stat.image ? (
                      <Image src={stat.image} alt={stat.value} className={styles.circle} />
                    ) : (
                      <p>Ошибка загрузки изображения</p>
                    )}
                    <div className={styles.textOverlay}>
                      <span className={styles.value}>{stat.value}</span>
                      <p className={styles.description}>{stat.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoldBrands;
