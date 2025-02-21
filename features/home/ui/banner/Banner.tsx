"use client";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/carousel";

import styles from "./Banner.module.scss";
import { Whatsapp } from "@/shared/customUI/whatsapp/Whatsapp";
import { CustomButton } from "@/shared/customUI/customButton/CustomButton";
import img1 from "@/public/banner/img-1.jpg";
import img2 from "@/public/banner/img-2.png";
import img3 from "@/public/banner/img-3.png";
import Image, { StaticImageData } from "next/image";

interface ISlider {
  //   image: StaticImageData;
  image?: string;
  title: string;
  description: string;
  buttonText: string;
}
const slides: ISlider[] = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/82f1/332a/6a123d3e5eb1988ec44d4a38ee32f4a2?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cllrSBCJaOvXEK6375RDvR4VKWHC-lh3yJv-zQ3z3rU9k6~hs0rFKrx~qJ7QaNoo~Jrl7aRqcP0bsCQmbBWagDBy~HR1mWHUynaDAbKFgL1JFHbbP-GlpBZwskyZZh3mSJe0oQVN0XpqwUpnIE1Wo7CJqeA9Q0CUBrwzd8C56~6alknbsV3HxRfTDuOM5VQpmoYI84a904kDpu2EIthVL76whHV8GQJaYy3N29Sz797DmJHBdmzog8chTuDoVcceHPaITfcAVlwBruasAxc9M8RtXDu1YyjMxBu0vuNcIiX-2etNeBC1Bj1vAKDY2YH42Bm79bdtoX-t8c1BJ2tg7Q__",
    title: "Тратите много времени на маркетинг, но не видите результатов?",
    description: "Эффективные решения от стратегии до реализации",
    buttonText: "Получить консультацию",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/3842/fda4/e85f0d183064263a0359bf0c91928dd2?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GRXcycic-hkJqhFJCa4isJmt5Zx~nRfikcHSgoX4pjewdOmm9k5YLP8UUqR4SoU9f~MizvjCOahZoPKuoNRK1EOfn2C6HLLhI3cW0dRYbXf63jweHAR129HejgEBLHyQOHRlQE8YmSgjq7qOoy4bF-5YtSrGwSJGrzjd5GD1m~I49ad9SgSDnQhN-Rpk8DAFErNCzk38EnivKr7ggudvEtOu251eHL72Vqs5dH6Wj3LkVt61kIeDJVypNemPJBisY3MFJR119de7CCr1gZ4PPzKrZzZ8jho5QvPcQWc8D5md5wLycZNfZy451SE1Ih8ouNU~CZhK-lDllaqUrfyVIQ__",
    title: "Хотите увеличить выручку в 2,4 или 10 раз в этом году?",
    description: "Комплексный маркетинг под ключ для вашего бизнеса",
    buttonText: "Узнать как",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/8284/2e4a/42e1cd2811aad27410fbb538635d5f4e?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gM406bERhZZRttpXefSME1jcv-XMdMsd6mMclS6PicmVHo9cULRIrW7V~W9Y7jcYBkmbCr007Av6Pck8sgjUPaJmcgyjgjYzhkPrmv19WWWZxXHZQ6U4yLXKLJjwG7o8SmN~R3Aj37SDLW9sHRiz6kRZXqD1zqv~qUzbPVFXhllnV-hU8cPfcjo2u7S0U3VogNONquzcRiVuo1smWDEgYgprkyGfXP6YGLuNHNkqo7fSSTrTmSCnKIIg8B~Dft7YQFXvX8xign1DJPhQOBa61bJ62sLgoaNmkWKSa4YXQv3y9ue86Zp3KQQczBiusfp9Jjt7AeJw6qmmHxGdJIJUuA__",
    title: "Хотите увеличить продажи и привлечь больше клиентов?",
    description: "Бизнес-решения, нацеленные на результат",
    buttonText: "Получить консультацию",
  },
];
type Props = {};

const Banner: React.FC<Props> = ({}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [animationKey, setAnimationKey] = useState<number>(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
    setAnimationKey((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
    setAnimationKey((prev) => prev + 1);
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
    }, 80);

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
            setAnimationKey((prev) => prev + 1);
            setTimeout(() => setIsPlaying(true), 8000);
          });
        }}
      >
        <CarouselContent className={styles.slider__wrapper}>
          {slides.map((slide, index) => (
            <CarouselItem
              key={`${index}-${animationKey}`}
              className={styles.slider__item}
            >
              {/* <div className={styles.slider__background} style={}> */}
              {/* <Image src={slide.image} alt="" /> */}
              {/* </div> */}

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

                  <CustomButton text={slide.buttonText} />
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
export default Banner;
