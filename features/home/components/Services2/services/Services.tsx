import frameBg_1 from "@/public/services/brandingBg.svg";
import frameBg_2 from "@/public/services/digitalBg.svg";
import frameBg_3 from "@/public/services/videoprodBg.svg";
import frameBg_4 from "@/public/services/webDesignBg.svg";
import frameBg_5 from "@/public/services/marketingBg.svg";
import frameBg_6 from "@/public/services/analytycsBg.svg";

import { ServiceItem } from "./ServiceItem";

import styles from "./Services.module.scss";

interface ServiceProps {
  title: string;
  badges: string[];
  href: string;
  bg_image: string;
}

const services: ServiceProps[] = [
  {
    title: "Брендинг",
    badges: ["Брендинг и айдентика", "Нейминг", "Дизайн поддержка"],
    href: "/servies/branding",
    bg_image: frameBg_1,
  },
  {
    title: "Digital продвижение",
    badges: ["SMM", "Инфлюенс-маркетинг", "Контекстная реклама"],
    href: "/servies/branding",
    bg_image: frameBg_2,
  },
  {
    title: "Видеопродакшн",
    badges: ["Моушн-видео", "Аэросъемка", "Видеопроизводство"],
    href: "/servies/branding",
    bg_image: frameBg_3,
  },
  {
    title: "Веб-разработка и дизайн",
    badges: ["Разработка сайтов", "UX/UI дизайн", "Техническая поддержка"],
    href: "/servies/branding",
    bg_image: frameBg_4,
  },
  {
    title: "Комплексное маркетинговое сопровождение",
    badges: ["Сео-продвижение сайтов", "Контекстная и таргетированная реклама"],
    href: "/servies/branding",
    bg_image: frameBg_5,
  },
  {
    title: "Автоматизация и аналитика",
    badges: ["Внедрение CRM-систем", "Разработка и запуск воронок продаж"],
    href: "/servies/branding",
    bg_image: frameBg_6,
  },
];

export const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.services__header}>
        <div className={styles.services__background}></div>
        <h1 className={styles.services__title}>
          Выводим компании в ТОП в <br />
          Центральной Азии и за ее пределами
        </h1>
      </div>
      <div className={styles.services__grid}>
        <div className={styles.services__container}>
          {services.map((service) => (
            <ServiceItem key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};
