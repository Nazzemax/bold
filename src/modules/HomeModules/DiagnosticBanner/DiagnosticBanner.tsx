"use client";
import React from "react";
import styles from "./DiagnosticBanner.module.scss";
import Image from "next/image";
import arrowIcon from "@/app/assets/icons/greyArrowRight.png"

export const DiagnosticBanner: React.FC = () => {
  return (
    <div className={styles.diagnosticBanner}>
      <div className={styles.gridOverlay}></div>
      <div className={styles.diagnosticContent}>
        <h2>Не знаете, с чего начать?</h2>
        <p>
          Запишитесь на диагностику маркетинга, и мы поможем <br /> определить
          эффективные решения для вашего бизнеса.
        </p>
        <button className={styles.diagnosticBtn}>
          Пройти диагностику
          <div className={styles.arrowContainer}>
            <Image className={styles.iconimage} src={arrowIcon} alt="" />
          </div>
        </button>
      </div>
    </div>
  );
};


