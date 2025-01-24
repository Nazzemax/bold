"use client";

import React, { useState } from "react";
import styles from "./VideoTestimonials.module.scss";
import Image from "next/image";
import Frame_1 from "../../assents/icon/Frame_1.png"; // Проверьте путь к файлу
import Polygon_4 from "../../assents/icon/Polygon_4.png"; // Проверьте путь к файлу

const testimonials = [
  {
    title: "",
    author: "",
    role: "",
    avatar: Frame_1,
  },
  {
    title: "",
    author: "",
    role: "Менеджер",
    avatar: Frame_1,
  },
  {
    title: "",
    author: "",
    role: "",
    avatar: Frame_1,
  },
];

const VideoTestimonials = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // Отображаем по одному отзыву на страницу
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const displayedTestimonials = testimonials.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={styles.videoTestimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Видеоотзывы от наших <br/> клиентов</h2>
          <div className={styles.pagination}>
            <button
              className={styles.arrowLeft}
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              &#8249;
            </button>
            <span>
              {String(currentPage).padStart(2, "0")} /{" "}
              {String(totalPages).padStart(2, "0")}
            </span>
            <button
              className={styles.arrowRight}
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              &#8250;
            </button>
          </div>
        </div>

        <div className={styles.testimonialContent}>
          {displayedTestimonials.map((testimonial, index) => (
            <div className={styles.testimonialCard} key={index}>
              {/* <div className={styles.author}>
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className={styles.avatar}
                  width={80}
                  height={80}
                />
                <div className={styles.authorDetails}>
                  <h3 className={styles.authorName}>{testimonial.author}</h3>
                  <span className={styles.authorRole}>{testimonial.role}</span>
                </div>
              </div> */}
              <div className={styles.video}>
                <button className={styles.playButton}>
                  <Image
                    src={Polygon_4}
                    alt="Play"
                    width={40}
                    height={40}
                  />
                </button>
              </div>
              <p className={styles.testimonialTitle}>{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonials;
