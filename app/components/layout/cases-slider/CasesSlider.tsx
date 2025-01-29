"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./CasesSlider.module.scss";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Link from "next/link";
import arrowRight from "@/public/cases/arrowRight.png";
import image from "@/public/context-ad/slider-img.png";
import smm from "@/public/context-ad/smm.png";
import target from "@/public/context-ad/target-tag-icon.png";
import marketing from "@/public/context-ad/marketing-tag-icon.png";
import insta from "@/public/context-ad/insta.png"
import tiktok from "@/public/context-ad/tiktok.png"
type Props = {};

export default function CasesSlider({}: Props) {
  const cases = [
    {
      image: image,
      title:
        "Увеличили выручку корейского ресторана на 70% уже во 2-й месяц работы",
      client: "Корейский ресторан",
      date: "12 октября",
      tags: [
        {
          title: "SMM",
          image: smm,
        },
        {
          title: "Таргет",
          image: target,
        },
        {
          title: "Маркетинг",
          image: marketing,
        },
      ],
    },
    {
      image: image,
      title:
        "Увеличили выручку корейского ресторана на 70% уже во 2-й месяц работы",
      client: "Корейский ресторан",
      date: "12 октября",
      tags: [
        {
          title: "SMM",
          image: smm,
        },
        {
          title: "Таргет",
          image: target,
        },
        {
          title: "Маркетинг",
          image: marketing,
        },
      ],
    },
    {
      image: image,
      title:
        "Увеличили выручку корейского ресторана на 70% уже во 2-й месяц работы",
      client: "Корейский ресторан",
      date: "12 октября",
      tags: [
        {
          title: "SMM",
          image: smm,
        },
        {
          title: "Таргет",
          image: target,
        },
        {
          title: "Маркетинг",
          image: marketing,
        },
      ],
    },
    {
      image: image,
      title:
        "Увеличили выручку корейского ресторана на 70% уже во 2-й месяц работы",
      client: "Корейский ресторан",
      date: "12 октября",
      tags: [
        {
          title: "SMM",
          image: smm,
        },
        {
          title: "Таргет",
          image: target,
        },
        {
          title: "Маркетинг",
          image: marketing,
        },
      ],
    },
    {
      image: image,
      title:
        "Увеличили выручку корейского ресторана на 70% уже во 2-й месяц работы",
      client: "Корейский ресторан",
      date: "12 октября",
      tags: [
        {
          title: "SMM",
          image: smm,
        },
        {
          title: "Таргет",
          image: target,
        },
        {
          title: "Маркетинг",
          image: marketing,
        },
      ],
    },
    {
      image: image,
      title:
        "Увеличили выручку корейского ресторана на 70% уже во 2-й месяц работы",
      client: "Корейский ресторан",
      date: "12 октября",
      tags: [
        {
          title: "SMM",
          image: smm,
        },
        {
          title: "Таргет",
          image: target,
        },
        {
          title: "Маркетинг",
          image: marketing,
        },
      ],
    },
  ];
  return (
    <div className={styles.CasesSlider}>
      <div className={styles.info}>
        <div className={styles.titles}>
          <h2 className={styles.subtitle}>кейсы</h2>
          <h1 className={styles.title}>
            Как мы помогли другим бизнесам расти?
          </h1>
        </div>
        <Link href={"/cases"}>
          <span>Все кейсы</span>
          <Image src={arrowRight} alt="arrow" />
        </Link>
      </div>

      <Swiper
        className={styles.slider}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        speed={3000}
        freeMode={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      >
        {cases.map((caseItem, index) => {
          return (
            <SwiperSlide key={index} className={styles.slide}>
              <div
                className={styles.tags}
                style={{ backgroundImage: `url(${caseItem.image.src})` }}
              >
                {caseItem.tags.map((tag, tagIndex) => (
                  <div key={tagIndex} className={styles.tag}>
                    <Image
                      src={tag.image}
                      alt={tag.title}
                      width={20}
                      height={20}
                    />
                    <span>{tag.title}</span>
                  </div>
                ))}
              </div>
              <div className={styles.social}>
                <div>
                  <Image src={insta.src} alt="insta" height={20} width={20}/>
                  <span>+10,5K подписчиков в Instagram</span>
                </div>

                <div>
                  <Image src={tiktok.src} alt="tiktok" height={20} width={20}/>
                  <span>1,5 млн просмотров в TikTok</span>
                </div>
              </div>
              <div className={styles.caseInfo}>
                <h3>{caseItem.title}</h3>
                <p>{caseItem.client}</p>
                <div className={styles.box}></div>
                <p>{caseItem.date}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
