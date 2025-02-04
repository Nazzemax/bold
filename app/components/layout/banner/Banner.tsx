import React from "react";
import arrowRight from "@/public/cases/arrowRight.png";
import Breadcrumb from "../../ui/breadcrumb/Breadcrumb";
import styles from './Banner.module.scss';

type Props = {
  title: string;
  subtitle: string;
  button: string;
  image: string;
};

export default function Banner({ title, subtitle, button, image }: Props) {
  return (
    <div className={styles.Banner}>
      <div className={styles.Background} style={{ backgroundImage: `url(${image})` }}></div>
      <Breadcrumb />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <button>
        {button}
        <img src={arrowRight.src} alt="Arrow Icon" />
      </button>
    </div>
  );
}
