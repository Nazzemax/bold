import React from "react";
import styles from "./HowWeWork.module.scss";
import Link from "next/link";
import research from "@/public/context-ad/research.png";
import research1 from "@/public/context-ad/research1.png";
import network from "@/public/context-ad/network.png";
import idea from "@/public/context-ad/idea.png";
import marketing from "@/public/context-ad/marketing.png";
import analytic from "@/public/context-ad/analytic.png";
import arrowRight from "@/public/cases/arrowRight.png";
type Props = {};

export default function HowWeWork({}: Props) {
  const works = [
    {
      text: "Изучаем вашу нишу, конкурентов и целевую аудиторию",
      image: research,
    },
    {
      text: "Определяем запросы, по которым вас будут находить клиенты",
      image: network,
    },
    {
      text: "Пишем привлекательные тексты и создаем эффективные креативы",
      image: idea,
    },
    {
      text: "Запускаем кампании в Google Ads и Яндекс Директ с точным таргетингом",
      image: marketing,
    },
    {
      text: "Постоянно следим за результатами и вносим улучшения",
      image: research1,
    },
    {
      text: "Предоставляем регулярные отчеты и предлагаем стратегии для роста",
      image: analytic,
    },
  ];
  return (
    <div className={styles.HowWeWork}>
      <div className={styles.info}>
        <h1>Как мы работаем</h1>
        <Link href="/consultation">
          Получить консультацию
          <img src={arrowRight.src} />
        </Link>
      </div>
      <div className={styles.works}>
        {works.map((work, id) => {
          return (
            <div className={styles.work} key={id}>
              <img src={work.image.src} alt={work.text} />
              <div className={styles.text}>
                <span>0{id + 1}</span>
                <p>{work.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
