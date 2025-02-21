import React, { CSSProperties } from "react";
import styles from "./Advantages.module.scss";
import Image from "next/image";

import circle1 from "@/public/advantages/circle1.svg";
import circle2 from "@/public/advantages/circle2.svg";
import circle3 from "@/public/advantages/circle3.svg";
import circle4 from "@/public/advantages/circle4.svg";

interface IAdvantage {
  title: string;
  subtitle: string;
}
interface Props {
  title?: string;
  subtitle: string;
  subtitleStyle?: CSSProperties;
  advantages: IAdvantage[];
  advantageStyle?: CSSProperties;
}

const Advantages: React.FC<Props> = ({
  title,
  subtitle,
  subtitleStyle,
  advantages,
  advantageStyle,
}) => {
  return (
    <div className={styles.advantages}>
      <div className={styles.advantages__container}>
        <div className={styles.advantages__text}>
          <h3 className={styles.advantages__title}>{title}</h3>
          <span style={subtitleStyle} className={styles.advantages__subtitle}>
            {subtitle}
          </span>
        </div>

        <div className={styles.advantages__circles}>
          <div className={styles.advantages__col1}>
            <div className={styles.advantages__circle}>
              <Image src={circle1} width={422} height={422} alt="circle1" />
              <div
                style={advantageStyle}
                className={styles.advantages__cirlceText}
              >
                <span className={styles.advantages__circleTitle}>
                  {advantages[0].title}
                </span>
                <span className={styles.advantages__circleSubtitle}>
                  {advantages[0].subtitle}
                </span>
              </div>
            </div>
            <div className={styles.advantages__circle}>
              <Image src={circle2} width={422} height={422} alt="circle2" />
              <div
                style={advantageStyle}
                className={styles.advantages__cirlceText}
              >
                <span className={styles.advantages__circleTitle}>
                  {advantages[1].title}
                </span>
                <span className={styles.advantages__circleSubtitle}>
                  {advantages[1].subtitle}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.advantages__col2}>
            <div className={styles.advantages__circle}>
              <Image src={circle3} width={422} height={422} alt="circle3" />
              <div
                style={advantageStyle}
                className={styles.advantages__cirlceText}
              >
                <span className={styles.advantages__circleTitle}>
                  {advantages[2].title}
                </span>
                <span className={styles.advantages__circleSubtitle}>
                  {advantages[2].subtitle}
                </span>
              </div>
            </div>
            <div className={styles.advantages__circle}>
              <Image src={circle4} width={422} height={422} alt="circle4" />
              <div
                style={advantageStyle}
                className={styles.advantages__cirlceText}
              >
                <span className={styles.advantages__circleTitle}>
                  {advantages[3].title}
                </span>
                <span className={styles.advantages__circleSubtitle}>
                  {advantages[3].subtitle}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
