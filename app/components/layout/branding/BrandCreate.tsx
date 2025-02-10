"use client";

import React, { useEffect, useState } from "react";
import "../branding/BrandCreate.scss";
import img1 from "@/public/branding/branding-img1.svg";
import img2 from "@/public/branding/branding-img2.svg";
import img3 from "@/public/branding/branding-img3.svg";

type BrandItem = {
  image: string;
  title: string;
  subTitle: string;
  text: string;
  tags: string[];
};

const BrandCreate: React.FC = () => {
  const oneBrand: BrandItem[] = [
    {
      image: img1.src,
      title: "Нейминг",
      subTitle: "Названия, которые остаются в памяти",
      text: "Мы придумываем уникальные и яркие названия, которые отражают суть вашего бизнеса и вызывают эмоции у клиентов.",
      tags: [
        "Глубокий анализ рынка и конкурентов",
        "Разработка креативных и вдохновляющих концепций",
      ],
    },
    {
      image: img2.src,
      title: "Дизайн логотипа и фирменного стиля",
      subTitle: "Визуальная идентичность, которая выделяет ваш бренд",
      text: "Разрабатываем оригинальные логотипы и элементы фирменного стиля, которые передают ценности и характер вашего бренда.",
      tags: [
        "Создание концепций логотипа",
        "Подбор цветовой палитры и типографики",
        "Разработка визуальных элементов и иконок",
      ],
    },
    {
      image: img3.src,
      title: "Брендбук",
      subTitle: "Создаем единый образ вашего бренда",
      text: "Разрабатываем полный брендбук — документ, который описывает все аспекты вашего бренда и его позиционирование.",
      tags: [
        "Миссия, ценности и философия бренда",
        "Гайдлайны по визуальному стилю и коммуникациям",
        "Тональность и стиль общения с аудиторией",
        "Примеры применения бренда в различных медиа",
      ],
    },
  ];

  //   смена порядка элементов происходит только при ширине экрана от 1000px
  const [isWideScreen, setIsWideScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsWideScreen(window.innerWidth >= 1000);
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <div className="brandCreate">
      <h2>Создаем бренд, который говорит сам за себя</h2>

      {oneBrand.map((brand, index) => (
        <div className="brandCreate-brandItem" key={index}>
          {isWideScreen && index % 2 !== 0 ? (
            <>
              <div
                className="brandCreate-brandImage"
                style={{
                  backgroundImage: `url(${brand.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "17px",
                  width: "100%",
                  height: "350px",
                }}
              />
              <div className="brandCreate-brandInfo">
                <h3>{brand.title}</h3>
                <span>{brand.subTitle}</span>
                <p>{brand.text}</p>
                <ul>
                  {brand.tags.map((tag, idx) => (
                    <li key={idx}>{tag}</li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="brandCreate-brandInfo">
                <h3>{brand.title}</h3>
                <span>{brand.subTitle}</span>
                <p>{brand.text}</p>
                <ul>
                  {brand.tags.map((tag, idx) => (
                    <li key={idx}>{tag}</li>
                  ))}
                </ul>
              </div>
              <div
                className="brandCreate-brandImage"
                style={{
                  backgroundImage: `url(${brand.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "17px",
                  width: "100%",
                  height: "350px",
                }}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default BrandCreate;
