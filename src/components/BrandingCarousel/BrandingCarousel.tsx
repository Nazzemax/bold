"use client";

import React, { useEffect, useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./BrandingCarousel.module.scss";
import Image from "next/image";

// Импорт изображений
import branding1 from "@/public/image/Rectangle26.png";
import branding2 from "@/public/image/Rectangle26.png";
import branding3 from "@/public/image/Rectangle26.png";
import branding4 from "@/public/image/Rectangle26.png";
import branding5 from "@/public/image/Rectangle26.png";

// Настройки карусели
const OPTIONS = {
  loop: true,
  align: "center",
  speed: 2, // Медленная прокрутка
  dragFree: true, // Дает естественное движение
};

const BrandingCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Функция автопрокрутки
  const autoplay = useCallback(() => {
    if (!emblaApi) return;

    autoplayRef.current = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0); // Возвращаемся к первому слайду
      }
    }, 4000); // 4 секунды перед каждым сдвигом
  }, [emblaApi]);

  // Запуск автопрокрутки
  useEffect(() => {
    if (!emblaApi) return;
    
    autoplay(); // Запускаем прокрутку

    emblaApi.on("pointerDown", () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    });

    emblaApi.on("pointerUp", autoplay);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [emblaApi, autoplay]);

  const images = [branding1, branding2, branding3, branding4, branding5];

  return (
    <section className={styles.container}>
      <div className={styles.TitleBlog}>
        <h4 className={styles.subtitle}>ПОЧЕМУ БРЕНДИНГ ВАЖЕН ДЛЯ ВАШЕГО БИЗНЕСА?</h4>
        <h2 className={styles.title}>Брендинг — это не просто логотип или название</h2>
        <p className={styles.description}>
          Это целостный образ вашей компании, который формирует восприятие клиентов и выделяет вас на рынке.
        </p>
      </div>

      {/* Обертка для карусели */}
      <div className={styles.carouselWrapper} ref={emblaRef}>
        <div className={styles.carousel}>
          {images.map((src, index) => (
            <div key={index} className={styles.slide}>
              <Image className={styles.image} src={src} alt={`Branding ${index + 1}`} width={400} height={300} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandingCarousel;
