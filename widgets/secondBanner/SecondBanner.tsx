"use client";
import styles from "./SecondBanner.module.scss";
import Image, { StaticImageData } from "next/image";
import { CustomButton } from "@/shared/customUI/customButton/CustomButton";
import Breadcrumb from "@/shared/customUI/breadcrumb/Breadcrumb";

type Props = {
  bgImg: StaticImageData;
  title: string;
  text?: string;
};

export const SecondBanner: React.FC<Props> = ({ bgImg, title, text }) => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={bgImg}
        alt="bg"
        width={1920}
        height={1080}
        className={styles.bgImg}
      />
      <div className={styles.intro}>
        <Breadcrumb />
        <h1 className={styles.intro__title}>{title}</h1>
        <p className={styles.intro__text}>{text}</p>
        <CustomButton text="Получить консультацию" />
      </div>
    </div>
  );
};
