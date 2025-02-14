"use client";
import whatsappIcon from "@/app/assets/icons/whatsapp-icon.svg";
import closeIcon from "@/app/assets/icons/closeIcon.svg";
import arrowWhite from "@/app/assets/icons/arrowWhite.svg";
import { useState } from "react";
import Image from "next/image";
import styles from "./Whatsapp.module.scss";
type Props = {};

export const Whatsapp: React.FC<Props> = ({}) => {
  const [close, setClose] = useState<boolean>(false);

  return (
    <div className={styles.whatsappButton}>
      <div
        className={`${styles.whatsappButton__notification} ${
          close ? styles.whatsappButton__notification_hidden : ""
        }`}
      >
        <Image
          src={closeIcon}
          alt="close"
          className={styles.whatsappButton__closeIcon}
          onClick={() => setClose(true)}
        />
        <p className={styles.whatsappButton__text}>Напишите нам на WhatsApp</p>
        <Image
          src={arrowWhite}
          alt="arrow"
          className={styles.whatsappButton__arrowIcon}
        />
      </div>

      <div className={styles.whatsappButton__iconWrapper}>
        <span className={styles.whatsappButton__pulse}></span>
        <Image
          src={whatsappIcon}
          alt="whatsapp"
          className={styles.whatsappButton__whatsappIcon}
        />
      </div>
    </div>
  );
};
