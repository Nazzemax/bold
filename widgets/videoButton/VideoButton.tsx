"use client";
import React from "react";
import Image from "next/image";
import styles from "./VideoButton.module.scss";
import background from "@/public/videoPlayBtn/playBtnBg.png";
import playIcon from "@/public/videoPlayBtn/playBtn.png";
const VideoPlayButton = () => {
  return (
    <section className={styles.videoSection}>
      <div className={styles.container}>
        <div className={styles.videoWrapper}>
          {/* Вращающийся круг */}
          <div className={styles.rotatingCircle}>
            <Image
              src={background}
              alt="Background"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Кнопка Play */}
          <div className={styles.playButton}>
            <Image src={playIcon} alt="Play" width={40} height={40} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayButton;
