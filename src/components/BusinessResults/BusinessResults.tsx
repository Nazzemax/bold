import React from "react";
import styles from "./BusinessResults.module.scss";
import Image from "next/image";

interface BusinessResultsProps {
  title: string;
  description: string;
  philosophyTitle: string;
  philosophyText: string;
  icon: string;
  image: string;
}

const BusinessResults: React.FC<BusinessResultsProps> = ({
  title,
  description,
  philosophyTitle,
  philosophyText,
  icon,
  image,
}) => {
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
          <div className={styles.image}>
            <Image src={image} alt="Изображение" className={styles.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessResults;
