"use client";
import React from "react";
import styles from "./DiagnosticBanner.module.scss";
import { CustomButton } from "@/shared/customUI/customButton/CustomButton";

export const DiagnosticBanner: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.diagnosticBanner}>
        <div className={styles.gridOverlay}></div>
        <div className={styles.diagnosticContent}>
          <h2>Не знаете, с чего начать?</h2>
          <p>
            Запишитесь на диагностику маркетинга, и мы поможем <br /> определить
            эффективные решения для вашего бизнеса.
          </p>
          <CustomButton text={"Пройти диагностику"} />
        </div>
      </div>
    </div>
  );
};
