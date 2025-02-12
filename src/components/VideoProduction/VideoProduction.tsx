import React from "react";
import styles from "./VideoProduction.module.scss";
import Image from "next/image";
import Arrow from '@/public/Arrow.png';

interface VideoItem {
  title: string;
  description: string;
  videoUrl: string;
  tags?: string[];
}

const videoItems: VideoItem[] = [
  {
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Рекламные видеоролики",
    description:
      "Создание сценарного видео, основанного на тщательном маркетинговом исследовании, позволяет нам точно соответствовать вашим бизнес-целям и вызывать нужную реакцию у целевой аудитории. Наши рекламные видеоролики направлены на привлечение заявок именно от тех, кто готов стать вашими клиентами.",
    tags: [
      "Точный таргетинг на нужную аудиторию",
      "Креативные и запоминающиеся сценарии",
      "Высокая конверсия и возврат инвестиций",
    ],
  },
  {
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Имиджевые и корпоративные видеоролики",
    description:
      "Имиджевые видеоролики укрепляют доверие к вашему бренду, повышают лояльность клиентов и демонстрируют масштабы вашей компании. Наша команда справится с любой задачей, создавая видео, которые отражают ваш корпоративный дух и ценности.",
    tags: [
      "Повышение узнаваемости бренда",
      "Демонстрация корпоративных ценностей и культуры",
      "Усиление доверия и лояльности клиентов",
    ],
  },
  {
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Медиаконтент для SMM-продвижения",
    description:
      "Создание контента для социальных сетей — это искусство, которым мы владеем в совершенстве. Наш медиаконтент увеличивает привлекательность ваших рекламных кампаний и повышает их эффективность. Мы предлагаем выгодные пакетные предложения, интегрированные в вашу SMM-стратегию, чтобы обеспечить максимальный охват и вовлеченность аудитории.",
    tags: [
      "Адаптация видео под соцсети",
      "Увеличение вовлеченности",
      "Высокая степень распространения контента",
    ],
  },
  {
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Съемка Life Events",
    description:
      "Мы проводим съемки важных событий и мероприятий: конференций, концертов, форумов и многого другого. Наши отчетные видеоролики сохраняют самые яркие моменты и передают атмосферу события, помогая вам делиться достижениями и успехами с вашей аудиторией.",
    tags: [
      "Профессиональная съемка мероприятий",
      "Передача атмосферы события",
      "Монтаж и постпродакшн высокого качества",
    ],
  },
  {
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Фотосессия",
    description:
      "Выездные и студийные съемки выполняют наши опытные фотографы, создавая эффектные снимки и обеспечивая безупречную обработку. Мы предлагаем несколько видов фотосессий: продуктовые, FASHION, портретные и другие, чтобы удовлетворить любые потребности вашего бизнеса.",
    tags: [
      "Индивидуальный подход",
      "Постобработка изображений",
      "Создание стильных и уникальных кадров",
    ],
  },
  
];

const VideoProduction = () => {
  return (
    <section className={styles.videoSection}>
      <h2 className={styles.title}>Наши услуги по Видеопродакшну</h2>
      <div className={styles.container}>
        {videoItems.map((item, index) => (
          <div key={index} className={`${styles.card} ${index % 2 !== 0 ? styles.reverse : ""}`}>
            <div className={styles.videoWrapper}>
              <iframe
                width="100%"
                height="215"
                src={item.videoUrl}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className={styles.text}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
              <ul>
                {item.tags?.map((tag, idx) => (
                  <li key={idx} >{tag}</li>
                ))}
              </ul>
              <div className={styles.Button}>
                <a href="#" className={styles.link}>Заказать</a>
                <Image src={Arrow} alt="" className={styles.icon} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoProduction;
