"use client";

import React, { useState } from "react";
import styles from "./VideoTestimonials.module.scss";
import Image from "next/image";

import Polygon_4 from "@/public/services/Polygon_4.png"; // Кнопка Play
import AvatarImage from "@/public/services/avatar.png"; // Аватар клиента
import BackgroundBlock from "@/public/services/BackgroundBlock.png";

const testimonials = [
  {
    title: "",
    author: "Дмитриев Дмитрий",
    role: "Директор",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    avatar: AvatarImage,
  },
  {
    title: "",
    author: "Анна Смирнова",
    role: "Менеджер",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    avatar: AvatarImage,
  },
  {
    title: "",
    author: "Петр Сидоров",
    role: "Маркетолог",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    avatar: AvatarImage,
  },
];

const VideoTestimonials = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const itemsPerPage = 1;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setIsPlaying(false);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setIsPlaying(false);
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
          <h2 className={styles.title}>Видеоотзывы от наших клиентов</h2>
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
              <div className={styles.clientInfo}>
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className={styles.avatar}
                  width={48}
                  height={48}
                />
                <div className={styles.text}>
                  <h3 className={styles.name}>{testimonial.author}</h3>
                  <p className={styles.role}>{testimonial.role}</p>
                </div>
              </div>

              <div className={styles.videoWrapper}>
                {!isPlaying && (
                  <Image
                    src={BackgroundBlock}
                    alt="Video Placeholder"
                    className={styles.videoPlaceholder}
                    layout="fill"
                    objectFit="cover"
                  />
                )}
                <video className={styles.video} controls autoPlay={isPlaying}>
                  <source src={testimonial.videoUrl} type="video/mp4" />
                  Ваш браузер не поддерживает видео.
                </video>
                {!isPlaying && (
                  <button
                    className={styles.playButton}
                    onClick={() => setIsPlaying(true)}
                  >
                    <img
                      src={Polygon_4.src}
                      alt="Play"
                      width={40}
                      height={40}
                    />
                  </button>
                )}
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
