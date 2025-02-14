"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./ReviewsSlider.module.scss";
import Image from "next/image";
import arrowRight from "@/app/assets/icons/arrowright.png";
import arrowLeft from "@/app/assets/icons/arrowleft.png";
import icon from "@/app/assets/icons/rightRedArrow.png";
import { useRef } from "react";
import Modal from "./ui/Modal/Modal";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

export const Reviews = () => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (review: any) => {
    setSelectedReview(review);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedReview(null);
  };

  const swiperRef = useRef<any>(null);

  const reviews = [
    {
      id: 1,
      name: "Дмитриев Дмитрий",
      position: "Директор",
      company: "Mldova",
      logo: "https://images.thevoicemag.ru/upload/img_cache/c7a/c7ae074b6741f615d469eedea6f3a573_cropped_666x833.webp",
      stars: 1,
      text: `ОсОО "ОсОО “Алматинские конфеты” — «Рахат» выражает искреннюю благодарность коллективу и руководству ОсОО «Болд Брендс Интернешнл».
      Мы выражаем нашу глубокую признательность за успешное сотрудничество с вашей компанией.
      Ваша профессиональная компетентность, ответственность, оперативность и индивидуальный подход к клиенту привели к`, // Короткий текст
      fullText: `ОсОО "Алматинские конфеты" — "Рахат" выражает искреннюю благодарность коллективу и руководству ОсОО "Болд Брендс Интернетшансы".
        Мы выражаем нашу глубокую признательность за успешное сотрудничество с вашей компанией.
        Ваша профессиональная компетентность, ответственность, оперативность и индивидуальный подход к клиенту привели к впечатляющим результатам, которые мы очень ценим.
        Команда выражает наилучшие пожелания вашему коллективу, желая дальнейшего процветания, эффективной работы, целей, творческого вдохновения и успешного завершения всех задач.
        Надеемся на продолжение нашего плодотворного сотрудничества и уверены в дальнейших успехах и достижениях в бизнесе.`, // Полный текст
    },
    {
      id: 2,
      name: "Трамп",
      position: "Президент латиносов",
      company: "Russian Federation",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5raGTMXxhTTYKnCDIPnylVVTdrG6AAdK_UA&s",
      stars: 5,
      text: `Да штоб негры сдохли все."
        Мы выражаем нашу глубокую признательность за успешное сотрудничество с вашей компанией.
        Ваша профессиональная некомпетентность, пофигизм и либеральность разрушили Америку мать! Ёп вашу мать!`, // Полный текст
    },
    // Другие отзывы
  ];

  return (
    <div className={styles.reviews}>
      <div className={styles.conteiner}>
        <div className={styles.textSection}>
          <h2>Отзывы наших партнеров</h2>
          <p>
            Мы гордимся нашими результатами и благодарим наших клиентов за
            доверие.
          </p>
        </div>
        <div className={styles.sliderSection}>
          <Swiper
            navigation={false}
            spaceBetween={20}
            slidesPerView={1}
            className={styles.swiperContainer}
            ref={swiperRef}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className={styles.swiperSl}>
                <div className={styles.reviewCard}>
                  <div className={styles.stars}>
                    {Array.from({ length: 5 }, (_, index) => (
                      <div key={index}>
                        {index < review.stars ? <FaStar size={40}/> : <CiStar size={40}/>}
                      </div>
                    ))}
                  </div>
                  <div className={styles.blog_name}>
                    <div className={styles.blog_header}>
                      <Image
                        src={review.logo}
                        width={60}
                        height={60}
                        alt={`${review.company} logo`}
                        className={styles.logo}
                      />
                      <div className={styles.bog_info}>
                        <h3 className={styles.name}>{review.name}</h3>
                        <p className={styles.position}>{review.position}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.text}>
                    {review.text.split("\n").map((paragraph, index) => (
                      <span key={index}>{paragraph.trim()}</span>
                    ))}
                  </div>
                  <button
                    className={styles.readMore}
                    onClick={() => openModal(review)}
                  >
                    Читать все
                    <Image
                      src={icon}
                      alt={"icon"}
                      className={styles.logoicon}
                    />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.customNavigation}>
            <button
              className={styles.prevButton}
              onClick={() => {
                if (swiperRef.current) swiperRef.current.swiper.slidePrev();
              }}
            >
              <Image
                src={arrowLeft}
                alt="Previous"
                className={styles.arrowIcon}
                width={16}
                height={16}
              />
            </button>
            <button
              className={styles.nextButton}
              onClick={() => {
                if (swiperRef.current) swiperRef.current.swiper.slideNext();
              }}
            >
              <Image
                src={arrowRight}
                alt="Next"
                className={styles.arrowIcon}
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>
      </div>
      {/* Модальное окно */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        review={selectedReview}
      />
    </div>
  );
};
