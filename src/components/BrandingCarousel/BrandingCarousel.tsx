"use client";

import React from "react";
import Slider from "react-slick";
import styles from "./BrandingCarousel.module.scss";
import Image from "next/image";

// Импорт изображений
import branding1 from "@/public/image/Rectangle26.png";
import branding2 from "@/public/image/Rectangle26.png";
import branding3 from "@/public/image/Rectangle26.png";
import branding4 from "@/public/image/Rectangle26.png";
import branding5 from "@/public/image/Rectangle26.png";

// Импорт CSS для слайдера
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandingCarousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [branding1, branding2, branding3, branding4, branding5];

  return (
    <section className={styles.container}>
        <div className={styles.TitleBlog}>
      <h4 className={styles.subtitle}>ПОЧЕМУ БРЕНДИНГ ВАЖЕН ДЛЯ ВАШЕГО БИЗНЕСА?</h4>
      <h2 className={styles.title}>Брендинг — это не просто логотип или название</h2>
      <p className={styles.description}>
        Это целостный образ вашей компании, который формирует
        восприятие клиентов и выделяет вас на рынке.
      </p>
      </div>
      <Slider {...settings} className={styles.slider}>
        {images.map((src, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image className={styles.image} src={src} alt={`Branding ${index + 1}`} width={400} height={300} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default BrandingCarousel;