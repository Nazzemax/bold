"use client";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/shadcnui/carousel";
import { Button } from "../ui/shadcnui/button";

import styles from "./HeroSlider.module.scss";
import Image from "next/image";
import arrowIcon from "@/public/heroSlider/Arrow.svg";
import { Whatsapp } from "../ui/heroSlider/Whatsapp";

interface ISlider {
  image: string;
  title: string;
  description: string;
  buttonText: string;
}
const slides: ISlider[] = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/82f1/332a/6a123d3e5eb1988ec44d4a38ee32f4a2?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n~QLH1xssjtt3l6d2~VVS6orrlVbsmPt1Fz3pLY9oU7yVwuHd9T6ZQGzLew1P49eLH~hr~TCOLeg3FCrabma3j3TCKb1Ae-QQu7N3~ikJ9WXHJYfxdjn17j2~okxvQqzd4vesywYhxACSYHMdTaxt7WkctPgqLDcalvYcCKGQTR33gwvcYxD2FKtTK4AWmn~lDuW-hjJcUU76L7T2yabOWRRFM9QDODIgm5dUp4PJNWU4QSUPd3pcXHwC0MD6dgeB2eLd1LH~kKDsSxWFYFgcIF-mHaL5Y9biOoZlXaOtLxffMi0Slxn5oieaWBbREZvtxG4d5D7N36qt4zS7yNt4g__",
    title: "Тратите много времени на маркетинг, но не видите результатов?",
    description: "Эффективные решения от стратегии до реализации",
    buttonText: "Получить консультацию",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/3842/fda4/e85f0d183064263a0359bf0c91928dd2?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TyjhV51yCdDF5MN68eWO5OwDHMDtT6Bd7tUUmfPo4wYip~7jPXvr4RdVDvtAqF9JJiRVSqAwdzZ6NlFGKuPrBTvBNEk9ipG-FSjCTHCgpxzgzjD-8bhYCZ8~wafpxdDJ0meG1ZePELmzqur2OewPdpKXj-bLPLm5QYvKYmkNc8ZnoTJOvvIn3GsV47i6-GkIyxHQTQoTcAl1k9PvD3tuXPn98QiuXubSlzFRKQHfeairZjLXwucYemfGPE-EcqEC8uEktaMzX6PlilhshPDQya6zXwiTllCJ963WxmstpDM6~jYsPrVkAxiK7h-4dBd2Qxr7OzuLo7d4Q22egml-2w__",
    title: "Хотите увеличить выручку в 2,4 или 10 раз в этом году?",
    description: "Комплексный маркетинг под ключ для вашего бизнеса",
    buttonText: "Узнать как",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/8284/2e4a/42e1cd2811aad27410fbb538635d5f4e?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ejm76yinU0oFNXT6z6sj1yJtecch-SIPOxgGpFxVdQj8Sa-hNmuy98lBDgvjNTFD0gbuQ8D~lgMKYM4oPhFryrkRVVT9YiOvM7V4uMfDK~jo9ejV1Kn8sAiLRHR4EZliCuDuhbKkMqAWkGcOElK7krfCYefgkdUYJr8sOQw1H44upiQsTimE~yOfscSo0-7SmjrXXPMpcmZmB7tYdRAklT~T5U8qJdT6Ro9da~pGlv7rZ8q2-urgPXcBQFG6A0URxgKkKfENeMBnSv8nIDj5xjQWb0mM~chgwA2iutBCU4clk7EUH1AfXD9tHa4eL8Dyav3HbdhaUZSvZTDfETzSZQ__",
    title: "Хотите увеличить продажи и привлечь больше клиентов?",
    description: "Бизнес-решения, нацеленные на результат",
    buttonText: "Получить консультацию",
  },
];
type Props = {};

const HeroSlider: React.FC<Props> = ({}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          prevSlide();
          return 0;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying, prevSlide]);

  return (
    <div className={styles.hero}>
      <Carousel
        className={styles.slider}
        opts={{ loop: true, startIndex: currentSlide }}
        setApi={(api) => {
          api?.on("select", () => {
            setCurrentSlide(api.selectedScrollSnap());
            setIsPlaying(false);
            setTimeout(() => setIsPlaying(true), 5000);
          });
        }}
      >
        <CarouselContent className={styles.slider__wrapper}>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className={styles.slider__item}>
              <div
                className={styles.slider__background}
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className={styles.slider__content}>
                <div className={styles.slider__container}>
                  <h1 className={styles.slider__title}>{slide.title}</h1>
                  <p className={styles.slider__description}>
                    {slide.description}
                  </p>
                  <Button size="lg" className={styles.slider__btnText}>
                    {slide.buttonText}
                    <span>
                      <Image src={arrowIcon} alt="" />
                    </span>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className={styles.slider__progress_bar}>
          <div
            className={styles.slider__progress}
            style={{ width: `${progress}%` }}
          />
        </div>

        <button
          className={`${styles.slider__button} ${styles.slider__button_prev}`}
          onClick={prevSlide}
        >
          <ChevronLeft size={32} className="text-white" />
        </button>

        <button
          className={`${styles.slider__button} ${styles.slider__button_next}`}
          onClick={nextSlide}
        >
          <ChevronRight size={32} className="text-white" />
        </button>
      </Carousel>

      <Whatsapp />
    </div>
  );
};
export default HeroSlider;
