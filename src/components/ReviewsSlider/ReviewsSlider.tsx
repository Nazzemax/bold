"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./ReviewsSlider.module.scss";
import Image from "next/image";
import logoEllipse from "@/public/Ellipse_3092.png";
import store from "@/public/image/Frame_64.png";
import arrowRight from "@/public/arrowright.png";
import arrowLeft from "@/public/arrowleft.png";
import icon from '@/public/Arrow.png'

import { useRef } from "react";

import Modal from "../../UI/Model/Modal"; // Подключаем модалку

const Reviews = () => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (review) => {
    setSelectedReview(review);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedReview(null);
  };
  const swiperRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: "Дмитриев Дмитрий",
      position: "Директор",
      company: '',
      logo: logoEllipse,
      stars: 5,
      text: `ОсОО "ОсОО “Алматинские конфеты” — «Рахат» выражает искреннюю благодарность коллективу и руководству ОсОО «Болд Брендс Интернешнл».
      Мы выражаем нашу глубокую признательность за успешное сотрудничество с вашей компанией.
      Ваша профессиональная компетентность, ответственность, оперативность и индивидуальный подход к клиенту привели к`, // Короткий текст
      fullText: `ОсОО "Алматинские конфеты" — "Рахат" выражает искреннюю благодарность коллективу и руководству ОсОО "Болд Брендс Интернетшансы".
        Мы выражаем нашу глубокую признательность за успешное сотрудничество с вашей компанией.
        Ваша профессиональная компетентность, ответственность, оперативность и индивидуальный подход к клиенту привели к впечатляющим результатам, которые мы очень ценим.
        Команда выражает наилучшие пожелания вашему коллективу, желая дальнейшего процветания, эффективной работы, целей, творческого вдохновения и успешного завершения всех задач.
        Надеемся на продолжение нашего плодотворного сотрудничества и уверены в дальнейших успехах и достижениях в бизнесе.`, // Полный текст
    },
    // Другие отзывы
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
            
            navigation={false}
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
                      <Image src={review.logo} alt={`${review.company} logo`} className={styles.logo} />
                      <div className={styles.bog_info}>
                        <h3 className={styles.name}>{review.name}</h3>
                        <p className={styles.position}>{review.position}</p>
                      </div>
                    </div>
                  </div>
                  <p className={styles.text}>{review.text.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
          ))}</p>
                  <button className={styles.readMore} onClick={() => openModal(review)}>
                    Читать все
                    <Image src={icon} alt={'icon'} className={styles.logoicon} />
                  </button>
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.customNavigation}>
        <button className={styles.prevButton} onClick={() => swiperRef.current.swiper.slidePrev()}>
          <Image src={arrowLeft} alt="Previous" className={styles.arrowIcon} width={16} height={16} />
        </button>
        <button className={styles.nextButton} onClick={() => swiperRef.current.swiper.slideNext()}>
          <Image src={arrowRight} alt="Next" className={styles.arrowIcon} width={16} height={16} />
          </button>
      </div>
        </div>
      </div>
      

      {/* Модальное окно */}
      <Modal isOpen={isModalOpen} onClose={closeModal} review={selectedReview} />
    </div>
  );
};

export default Reviews;
