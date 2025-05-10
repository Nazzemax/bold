"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./ReviewsSlider.module.scss";
import Image from "next/image";

import arrowLeft from "@/public/icons/arrowleft.png";
import arrowRight from "@/public/icons/arrowright.png";
import icon from "@/public/icons/rightRedArrow.png";

import { useRef } from "react";
import Modal from "./ui/Modal/Modal";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import useMobileDetection from "@/shared/hooks/useMobileDetection";
import {
  formatTextWithParagraphs,
  truncateText,
} from "@/shared/utils/helpers/helpers";

export const Reviews = () => {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isMobile = useMobileDetection();

  interface Review {
    id: number;
    name: string;
    position: string;
    company: string;
    logo: string;
    stars: number;
    text: string;
    fullText: string;
  }

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const openModal = (review: Review) => {
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
      company: "",
      logo: "https://images.thevoicemag.ru/upload/img_cache/c7a/c7ae074b6741f615d469eedea6f3a573_cropped_666x833.webp",
      stars: 5,
      text: `ОсОО "ОсОО “Алматинские конфеты” — «Рахат» выражает искреннюю благодарность коллективу и руководству ОсОО «Болд Брендс Интернешнл».
      Мы выражаем нашу глубокую признательность за успешное сотрудничество с вашей компанией.
      Ваша профессиональная компетентность, ответственность, оперативность и индивидуальный подход к клиенту привели...`, // Короткий текст
      fullText: `ОсОО "Алматинские конфеты" — "Рахат" выражает искреннюю благодарность коллективу и руководству ОсОО "Болд Брендс Интернетшансы".
        Мы выражаем нашу глубокую признательность за успешное сотрудничество с вашей компанией.
        Ваша профессиональная компетентность, ответственность, оперативность и индивидуальный подход к клиенту привели к впечатляющим результатам, которые мы очень ценим.
        Команда выражает наилучшие пожелания вашему коллективу, желая дальнейшего процветания, эффективной работы, целей, творческого вдохновения и успешного завершения всех задач.
        Надеемся на продолжение нашего плодотворного сотрудничества и уверены в дальнейших успехах и достижениях в бизнесе.`, // Полный текст
    },

    {
      id: 2,
      name: "Дмитриев Дмитрий",
      position: "Директор",
      company: "",
      logo: "https://images.thevoicemag.ru/upload/img_cache/c7a/c7ae074b6741f615d469eedea6f3a573_cropped_666x833.webp",
      stars: 5,
      text: `ОсОО "ОсОО “Алматинские конфеты” — «Рахат» выражает искреннюю благодарность коллективу и руководству ОсОО «Болд Брендс Интернешнл».
      Мы выражаем нашу глубокую признательность за успешное сотрудничество с вашей компанией.
      Ваша профессиональная компетентность, ответственность, оперативность и индивидуальный подход к клиенту привели...`, // Короткий текст
      fullText: `ОсОО "Алматинские конфеты" — "Рахат" выражает искреннюю благодарность коллективу и руководству ОсОО "Болд Брендс Интернетшансы".
        Мы выражаем нашу глубокую признательность за успешное сотрудничество с вашей компанией.
        Ваша профессиональная компетентность, ответственность, оперативность и индивидуальный подход к клиенту привели к впечатляющим результатам, которые мы очень ценим.
        Команда выражает наилучшие пожелания вашему коллективу, желая дальнейшего процветания, эффективной работы, целей, творческого вдохновения и успешного завершения всех задач.
        Надеемся на продолжение нашего плодотворного сотрудничества и уверены в дальнейших успехах и достижениях в бизнесе.`, // Полный текст
    },
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
            ref={swiperRef}
            modules={[Navigation]}
            navigation={{
              nextEl: `.${styles["swiper-button-next"]}`,
              prevEl: `.${styles["swiper-button-prev"]}`,
            }}
            spaceBetween={20}
            slidesPerView={1}
            autoplay
            className={styles.swiperContainer}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className={styles.swiperSl}>
                <div className={styles.reviewCard}>
                  <div className={styles.stars}>
                    {Array.from({ length: 5 }, (_, index) => (
                      <div key={index}>
                        {index < review.stars ? (
                          <FaStar size={30} />
                        ) : (
                          <CiStar size={30} />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className={styles.blog_name}>
                    <div className={styles.blog_header}>
                      <Image
                        src={review.logo}
                        alt={`${review.company} logo`}
                        className={styles.logo}
                        width={40}
                        height={40}
                      />
                      <div className={styles.bog_info}>
                        <h3 className={styles.name}>{review.name}</h3>
                        <p className={styles.position}>{review.position}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.text}>
                    {" "}
                    {formatTextWithParagraphs(
                      truncateText(review.fullText, isMobile)
                    ).map((line, index) => (
                      <p key={index}>{line}</p>
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
            <button className={styles["swiper-button-prev"]}>
              <Image
                src={arrowLeft}
                alt="Previous"
                className={styles.arrowIcon}
                width={10}
                height={15}
              />
            </button>
            <button className={styles["swiper-button-next"]}>
              <Image
                src={arrowRight}
                alt="Next"
                className={styles.arrowIcon}
                width={10}
                height={15}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      <div style={{ overflowY: "auto", maxHeight: "90vh" }}>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          review={selectedReview}
        />
      </div>
    </div>
  );
};
