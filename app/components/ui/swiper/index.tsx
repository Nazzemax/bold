"use client";

import React from 'react';
import { Autoplay } from 'swiper/modules';
import {
  Swiper as PrimitiveSwiper,
  SwiperProps as PrimitiveSwiperProps,
  SwiperSlide,
} from 'swiper/react';
// import 'swiper/css';
import 'swiper/swiper-bundle.css';

interface SwiperProps extends PrimitiveSwiperProps {
  children: React.ReactNode
  autoplayDelay?: number;
}

const Swiper = ({
  loop,
  autoplay,
  autoplayDelay = 5000,
  children,
  scrollbar,
  onSlideChange,
  spaceBetween = 16
}: SwiperProps) => {

  const slides = React.Children.map(children, (child, index) => (
    <SwiperSlide key={index}>{child}</SwiperSlide>
  ));

  return (
    <PrimitiveSwiper
      spaceBetween={spaceBetween}
      // slidesPerView={slidesPerView}
      onSlideChange={onSlideChange}
      onSwiper={(swiper) => console.log(swiper)}
      loop={loop}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      autoplay={autoplay ? {
        delay: autoplayDelay,
        disableOnInteraction: false,
      } : false}
      modules={[Autoplay]}
      scrollbar={scrollbar}
      //зависит от требований
      grabCursor
    >
      {slides}
    </PrimitiveSwiper>
  )
}

export default Swiper