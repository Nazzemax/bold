"use client"
import React, { useState } from "react";
import styles from "./BusinessResults.module.scss";
import Image from "next/image";

interface BusinessResultsProps {
  title: string;
  description: string;
  philosophyTitle: string;
  philosophyText: string;
  icon: string;
  image?: string;
  videoUrl?: string;
}

const BusinessResults: React.FC<BusinessResultsProps> = ({
  title,
  description,
  philosophyTitle,
  philosophyText,
  icon,
  image,
  videoUrl,
}) => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  return (
    <div className={styles.BusinessResults}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className={styles.content}>
          <div className={styles.philosophy}>
            <div className={styles.icon}>
              <Image src={icon} alt="Иконка" width={60} height={60} />
            </div>
            <div className={styles.text}>
              <h2>{philosophyTitle}</h2>
              <p>{philosophyText}</p>
            </div>
          </div>

          {/* Видео с картинкой-заглушкой */}
          <div className={styles.media}>
            {isVideoVisible ? (
              <iframe
                width="100%"
                height="315"
                src={videoUrl}
                title="YouTube Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.video}
              ></iframe>
            ) : (
              <div className={styles.videoPlaceholder} onClick={() => setIsVideoVisible(true)}>
                <Image src={image} alt="Видео превью" className={styles.img} />
                <div className={styles.playButton}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="64"
                    height="64"
                    fill="red"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessResults;
