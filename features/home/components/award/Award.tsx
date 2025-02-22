import Image from "next/image";
import awardBg from "@/public/award/background-circle.png";
import award from "@/public/award/award.svg";

import styles from "./Award.module.scss";

export const Award = () => {
  return (
    <div className={styles.awardSection}>
      <div className={styles.grid}>
        <div className={styles.awardBg} />
        <div className={styles.content}>
          <div className={styles.badge}>Получили премию</div>
          <h1 className={styles.title}>Маркетинговая компания года</h1>
          <h3 className={styles.subtitle}>
            на The Great Award of the Year 2023!
          </h3>
        </div>
        <div className={styles.imageContainer}>
          <Image src={awardBg} alt="award bg" width={475} height={338} />
          <Image
            src={award}
            alt="award"
            width={475}
            height={338}
            className={styles.awardImage}
          />
        </div>
      </div>
    </div>
  );
};
