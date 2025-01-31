"use client";

import styles from "./Partners.module.scss";
import Image, { StaticImageData } from "next/image";
import logo1 from "@/public/partners/logo_1.png";
import logo2 from "@/public/partners/logo_2.png";
import logo3 from "@/public/partners/logo_3.png";
import logo4 from "@/public/partners/logo_4.png";
import logo5 from "@/public/partners/logo_5.png";
import logo6 from "@/public/partners/logo_6.png";
import logo7 from "@/public/partners/logo_7.png";
import { useLayoutEffect, useRef } from "react";

interface PartnersProps {}

interface IPartner {
  id: number;
  img: StaticImageData;
}

const partners: IPartner[] = [
  { id: 1, img: logo1 },
  { id: 2, img: logo2 },
  { id: 3, img: logo3 },
  { id: 4, img: logo4 },
  { id: 5, img: logo5 },
  { id: 6, img: logo6 },
  { id: 7, img: logo7 },
];
const Partners: React.FC<PartnersProps> = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const clonedPartners = [...partners, ...partners, ...partners];

  useLayoutEffect(() => {
    if (trackRef.current) {
      const width = trackRef.current.scrollWidth / 3;
      trackRef.current.style.width = `${width * 3}px`;
    }
  }, []);
  return (
    <div className={styles.partners}>
      <h3 className={styles.partners__title}>наши партнеры</h3>
      <div className={styles.partners__content}>
        <div className={styles.partners__group} ref={trackRef}>
          {clonedPartners.map((partner, idx) => (
            <div className={styles.partners__items} key={idx}>
              <Image
                src={partner.img}
                alt="logo"
                className={styles.partners__img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
