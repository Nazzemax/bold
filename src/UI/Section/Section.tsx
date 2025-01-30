import React from "react";
import styles from "./Section.module.scss";
import Image from "next/image";

interface Item {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

interface SectionProps {
  title: string;
  items: Item[];
}

const Section: React.FC<SectionProps> = ({ title, items }) => {
  return (
    <section className={styles.approachSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.container}>
          {items.map((item, index) => (
            <div
              key={index}
              style={{width:"100%" , background:"white"} }
              className={`${styles.card}  ${item.reverse ? styles.reverse : ""}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                className={styles.image}
                width={300}
                height={300}
              />
              <div className={styles.text}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
