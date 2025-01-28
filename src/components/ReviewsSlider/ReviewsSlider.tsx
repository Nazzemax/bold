"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";  // Модуль Navigation
import "swiper/css"; // Подключаем базовые стили Swiper
import "swiper/css/navigation"; // Подключаем стили для навигации
import styles from "./ReviewsSlider.module.scss";
import Image from "next/image";
import logoEllipse from "@/public/Ellipse_3092.png"; // Путь к изображению
import store from '@/public/image/Frame_64.png'
import arrowRight from '@/public/arrowright.png'
import arrowLeft from '@/public/arrowleft.png'

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Дмитриев Дмитрий",
      position: "Директор",
      company: 'ОсОО "Алматинские конфеты"',
      logo: logoEllipse,
      stars: 5,
      text: `ОсОО "Алматинские конфеты" — "Рахат" выражает искреннюю благодарность коллективу и руководству ОсОО "Болд Брендс Интернетшансы". Мы выражаем нашу глубокую признательность за успешное сотрудничество с вашей компанией.     Ваша профессиональная компетентность, ответственность, оперативность и индивидуальный подход к клиенту привели...`,
    },
    {
        id: 2,
        name: "Дмитриев Дмитрий",
        position: "Директор",
        company: 'ОсОО "Алматинские конфеты"',
        logo: logoEllipse,
        stars: 5,
        text: `ОсОО "Алматинские конфеты" — "Рахат" выражает искреннюю благодарность коллективу и руководству ОсОО "Болд Брендс Интернетшансы". Мы выражаем нашу глубокую признательность за успешное сотрудничество с вашей компанией. Ваша профессиональная компетентность, ответственность, оперативность и индивидуальный подход к клиенту привели...`,
      },
  ];

  return (
    <div className={styles.reviews}>
        <div className={styles.conteiner}>
        <div className={styles.textSection}>
        <h2>Отзывы наших партнеров</h2>
        <p>Мы гордимся нашими результатами и благодарим наших клиентов за доверие.</p>
      </div>

      <div className={styles.sliderSection}>
        <Swiper
        
          modules={[Navigation]} 
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }} // Указываем стрелки
          spaceBetween={20}
          slidesPerView={1}
          className={styles.swiperContainer}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className={styles.swiperSl}>
              <div className={styles.reviewCard}>
              <div className={styles.stars}>
                    {Array.from({ length: 5 }, (_, index) => (
                      <Image
                        key={index}
                        src={index < review.stars ? store : "/path/to/empty-star.png"}
                        alt={index < review.stars ? "Full star" : "Empty star"}
                        className={styles.starImage}
                        width={30}
                        height={30}
                      />
                    ))}
                  </div>
                <div className={styles.blog_name}>
                 
                <div className={styles.blog_header}>
                <Image
                  src={review.logo}
                  alt={`${review.company} logo`}
                  className={styles.logo}
                />
                <div className={styles.bog_info}>
                <h3 className={styles.name}>{review.name}</h3>
                <p className={styles.position}>{review.position}</p>
                </div>
                </div>
                </div>
                <p className={styles.text}>{review.text}</p>
                <a href="#" className={styles.readMore}>
                  Читать все
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Добавляем стрелки навигации */}
        <div className={"swiper-button-next"} style={{width:'64px',height:'64px',backgroundColor:'#F1F3F7', borderRadius:'16px' }}>
          <Image src={arrowRight} alt="next arrow button icon" width={10} height={15} />
        </div>
        <div className="swiper-button-prev" style={{width:'64px',height:'64px',backgroundColor:'#F1F3F7',borderRadius:'16px' }}>
          <Image src={arrowLeft} alt="previous arrow button icon" width={10} height={15} />
        </div>
      </div>
        </div>
        <style>
          {
            `
            .swiper-button-prev::after,
            .swiper-button-next::after { 
            content:''; 
            }
`}
        </style>
      
    </div>
    
  );
};

export default Reviews;
