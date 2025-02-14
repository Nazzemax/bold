"use client";
import React from "react";
import styles from "./SertificateBanner.module.scss";
import Image from "next/image";
import certificate from "@/app/assets/icons/certificate.png";
import backgroundCircle from "@/app/assets/icons/background-circle.png";

type localData = {
  title: "ПАРТНЕРСТВО";
  // ...
};

export const SertificateBanner: React.FC = () => {
  return (
    <div className={styles.partnershipBanner}>
      <div className={styles.gridOverlay}></div>

      <div className={styles.container}>
        <div className={styles.leftContent}>
          <span className={styles.badge}>ПАРТНЕРСТВО</span>
          <h2 className={styles.heading}>
            Мы официальные партнеры <br /> Битрикс24
          </h2>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src={backgroundCircle}
            alt="Background Circle"
            className={styles.backgroundCircle}
          />
          <Image
            src={certificate}
            alt="Сертификат"
            className={styles.certificate}
          />
        </div>
      </div>
    </div>
  );
};
