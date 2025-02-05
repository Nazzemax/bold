"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./VideoButton.module.scss";
import background from "@/public/1.png";
import playIcon from "@/public/Polygo2.png";

const VideoPlayButton = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.videoWrapper}
        whileHover={{ scale: 1.1 }} // Увеличение при наведении
        whileTap={{ scale: 0.95 }} // Эффект нажатия
      >
        {/* Вращающийся круг */}
        <motion.div
          className={styles.rotatingCircle}
          animate={{ rotate: 360 }} // Круг крутится бесконечно
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <Image src={background} alt="Background" layout="fill" objectFit="cover" />
        </motion.div>

        {/* Кнопка Play */}
        <div className={styles.playButton}>
          <Image src={playIcon} alt="Play" width={40} height={40} />
        </div>
      </motion.div>
    </div>
  );
};

export default VideoPlayButton;
