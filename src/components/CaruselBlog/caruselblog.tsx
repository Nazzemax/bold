"use client";

import React from "react";
import Slider from "react-slick";
import styles from "./caruselblog.module.scss";
import image1 from '@/public/image/Rectangle_01.png'

// Импорт CSS для слайдера
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carusel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // arrows: true,
  };

  const images = [
    
    "image/Rectangle_31.png",
    "image/Rectangle_02.png",
    "image/Rectangle_03.png",
    "image/Rectangle_31.png",
    "image/Rectangle_2.png",
  ];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.title}>
      <h2>Контент, который продает</h2>
      <p>Мы создаем визуалы, которые выделяют ваш бренд среди конкурентов</p>
      </div>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img className={styles.image} src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carusel;
