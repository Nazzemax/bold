"use client";

import React from "react";
import Slider from "react-slick";
import styles from "./Carousel.module.scss";
import Image from "next/image";

// Импорт изображений
import raxat from "@/public/image/raxat.png";
import group890 from "@/public/image/Group_890.png";
import group4490 from "@/public/image/Group_4490.png";
import group4648 from "@/public/image/Group_4648.png";
import group39783 from "@/public/image/Group_39783.png";

// Импорт CSS для слайдера
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const images = [raxat, group890, group4490, group4648, group39783];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.title}>
        <h2>НАШИ ПАРТНЕРЫ</h2>
      </div>
      <Slider {...settings} className={styles.slider}>
        {images.map((src, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image className={styles.image} src={src} alt={`Slide ${index + 1}`} width={150} height={80} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;