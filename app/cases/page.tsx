"use client";
import React from "react";
import styles from "./Cases.module.scss";
import Breadcrumb from "../components/ui/breadcrumb/Breadcrumb";

function Cases() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.intro}>
          <Breadcrumb />
          <h1 className={styles.intro__title}>
            Наша миссия воплощать идеи <br /> в жизнь
          </h1>
          <button className={styles.intro__consultation}>
            Получить консультацию
          </button>
        </div>
      </main>
    </>
  );
}
export default Cases;
