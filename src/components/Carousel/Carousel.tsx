"use client";

import React from "react";
import Slider from "react-slick";
import styles from "./Carousel.module.scss";

// Импорт изображений
import raxat from "@/public/image/raxat.png";
import group890 from "@/public/image/Group_890.png";
import group4490 from "@/public/image/Group_4490.png";
import group4648 from "@/public/image/Group_4648.png";
import group39783 from "@/public/image/Group_39783.png";

// Импорт CSS для слайдера
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carusel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [raxat, group890, group4490, group4648, group39783];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.title}>
        <h2>Наши партнеры</h2>
        <p></p>
      </div>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img className={styles.image} src={src.src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carusel;
