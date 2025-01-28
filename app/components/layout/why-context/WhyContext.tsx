import React from "react";
import cardImage1 from "@/public/context-ad/why1.png";
import cardImage2 from "@/public/context-ad/why2.png";
import cardImage3 from "@/public/context-ad/why3.png";
import targetIcon from "@/public/context-ad/target.png";
import budgetIcon from "@/public/context-ad/budget.png";
import effectIcon from "@/public/context-ad/effect.png";
import styles from "./WhyContext.module.scss";
type Props = {};

export default function WhyContext({}: Props) {
  const cards = [
    {
      title: "Точный таргетинг",
      text: "Ваши объявление видят пользователи уже заинтересованные в ваших товарах или услугах.",
      image: cardImage1,
      icon: targetIcon,
    },
    {
      title: "Гибкий бюджет",
      text: "Контролируйте расходы, оплачивая только реальные клики по вашим объявлениям.",
      image: cardImage2,
      icon: budgetIcon,
    },
    {
      title: "Измеримый эффект",
      text: "Отслеживайте эффективность рекламы с помощью точной аналитики.",
      image: cardImage3,
      icon: effectIcon,
    },
  ];
  return (
    <div className={styles.WhyContext}>
      <h1>Почему конкекстная реклама?</h1>
      <div className={styles.cards}>
        {cards.map((card, id) => {
          return (
            <div className={styles.card} key={id}>
              <div
                className={styles.image}
                style={{ backgroundImage: `url(${card.image.src})` }}
              ></div>
              <div className={styles.info}>
                <h6>{card.title}</h6>
                <p>{card.text}</p>
              </div>
              <img
                className={styles.icon}
                src={card.icon.src}
                alt={card.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
