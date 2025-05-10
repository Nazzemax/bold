"use client";
import React, { useEffect, useState } from "react";
import styles from "./Cases.module.scss";
import Image from "next/image";
import iconBlog from "@/public/cases/caseItem.png";
import insta from "@/public/cases/social.png";
import tiktok from "@/public/cases/tiktok.png";
import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/carousel";
import { ChevronRight } from "lucide-react";
import { cn } from "@/shared/utils/utils";

const useMarginLeft = (selector: string) => {
  const [marginLeft, setMarginLeft] = useState(0);

  const updateMarginLeft = () => {
    const element = document.querySelector(selector);
    if (element) {
      const computedStyle = window.getComputedStyle(element);
      setMarginLeft(parseFloat(computedStyle.marginLeft));
    }
  };

  useEffect(() => {
    updateMarginLeft();

    window.addEventListener("resize", updateMarginLeft);
    return () => {
      window.removeEventListener("resize", updateMarginLeft);
    };
  }, []);

  return marginLeft;
};

const categories = [
  { id: 1, name: "SMM", active: true },
  { id: 2, name: "Таргет", active: false },
  { id: 3, name: "Маркетинг", active: false },
];

const cases = [
  {
    title: "Увеличили выручку корейского ресторана на 70..",
    category: "Корейский ресторан",
    date: "15 Дек. 2023",
    stats: { subscribers: "+10,5К подписчиков", views: "1,5 млн просмотров" },
    tags: ["SMM", "Маркетинг"],
    image: iconBlog,
  },
  {
    title: "Привлекли клиентов на сумму 130 000 $ в агентство недви",
    category: "Консульт недвижимость",
    date: "15 Дек. 2023",
    stats: { subscribers: "+10,5К подписчиков", views: "1,5 млн просмотров" },
    tags: ["Маркетинг"],
    image: iconBlog,
  },
  {
    title: "Увеличили выручку корейского ресторана на 70..",
    category: "Корейский ресторан",
    date: "15 Дек. 2023",
    stats: { subscribers: "+10,5К подписчиков", views: "1,5 млн просмотров" },
    tags: ["Таргет"],
    image: iconBlog,
  },
  {
    title: "Привлекли клиентов на сумму 130 000 $ в агентство недвиж",
    category: "Консульт недвижимость",
    date: "15 Дек. 2023",
    stats: { subscribers: "+10,5К подписчиков", views: "1,5 млн просмотров" },
    tags: ["SMM", "Маркетинг"],
    image: iconBlog,
  },
  {
    title: "Увеличили выручку корейского ресторана на 70..",
    category: "Корейский ресторан",
    date: "15 Дек. 2023",
    stats: { subscribers: "+10,5К подписчиков", views: "1,5 млн просмотров" },
    tags: ["SMM", "Маркетинг"],
    image: iconBlog,
  },
  {
    title: "Увеличили выручку корейского ресторана на 70..",
    category: "Корейский ресторан",
    date: "15 Дек. 2023",
    stats: { subscribers: "+10,5К подписчиков", views: "1,5 млн просмотров" },
    tags: ["SMM", "Маркетинг"],
    image: iconBlog,
  },
  {
    title: "Привлекли клиентов на сумму 500 000 $ для бизнеса..",
    category: "Крупный бизнес",
    date: "20 Янв. 2024",
    stats: { subscribers: "+15К подписчиков", views: "2 млн просмотров" },
    tags: ["SMM", "Маркетинг"],
    image: iconBlog,
  },
  {
    title: "Повысили продажи интернет-магазина на 30%",
    category: "E-commerce",
    date: "18 Янв. 2024",
    stats: { subscribers: "+8К подписчиков", views: "1,2 млн просмотров" },
    tags: ["SMM", "Маркетинг"],
    image: iconBlog,
  },
];

function Cases() {
  const marginLeft = useMarginLeft(".element");
  return (
    <div className={styles.wrapper}>
      <div className={cn(styles.container, "element")}>
        <h1 className={styles.title}>Как мы помогли другим бизнесам расти?</h1>
        <p className={styles.text}>
          Все кейсы <ChevronRight />
        </p>
      </div>

      <Carousel className={styles.carousel}>
        <CarouselContent
          className="flex  gap-8"
          style={{ marginLeft: marginLeft }}
        >
          {cases.map((item, index) => (
            <CarouselItem key={index} className="max-w-[535px]">
              <div className={styles.caseCard} key={index}>
                <div className={styles.tags}>
                  {item.tags.map((tag, idx) => (
                    <span className={styles.tag} key={idx}>
                      {tag}
                    </span>
                  ))}
                </div>
                <Image
                  src={item.image}
                  alt={item.title}
                  className={styles.caseImage}
                />
                <div className={styles.caseBlog}>
                  <div className={styles.caseStats}>
                    <span>
                      <Image src={insta} alt="Instagram" />{" "}
                      {item.stats.subscribers}
                    </span>
                    <span>
                      <Image src={tiktok} alt="TikTok" /> {item.stats.views}
                    </span>
                  </div>
                  <div className={styles.caseContent}>
                    <h3 className={styles.caseTitle}>{item.title}</h3>
                    <div className={styles.caseDetails}>
                      <span>{item.category}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className={styles.casesGrid}>
        {cases.map((item, index) => (
          <div className={styles.caseCard} key={index}>
            <div className={styles.tags}>
              {item.tags.map((tag, idx) => (
                <span className={styles.tag} key={idx}>
                  {tag}
                </span>
              ))}
            </div>
            <Image
              src={item.image}
              alt={item.title}
              className={styles.caseImage}
            />
            <div className={styles.caseBlog}>
              <div className={styles.caseStats}>
                <span>
                  <Image src={insta} alt="Instagram" /> {item.stats.subscribers}
                </span>
                <span>
                  <Image src={tiktok} alt="TikTok" /> {item.stats.views}
                </span>
              </div>
              <div className={styles.caseContent}>
                <h3 className={styles.caseTitle}>{item.title}</h3>
                <div className={styles.caseDetails}>
                  <span>{item.category}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cases;
