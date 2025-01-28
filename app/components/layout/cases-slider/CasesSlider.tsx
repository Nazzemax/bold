"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./CasesSlider.module.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Link from "next/link";
import arrowRight from "@/public/cases/arrowRight.png";
import image from "@/public/context-ad/slider-img.png";

type Props = {};

export default function CasesSlider({}: Props) {
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
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <Image src={image} alt={`Work ${index + 1}`} width={400} height={300} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
