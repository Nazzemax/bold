import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Badge } from "../../../../shared/customUI/badge/Badge";
import styles from "./Services.module.scss";

interface ServiceProps {
  title: string;
  badges: string[];
  href: string;
  bg_image: string;
}

export const ServiceItem = ({
  bg_image,
  title,
  href,
  badges,
}: ServiceProps) => {
  return (
    <div className={styles.card}>
      <Image
        src={bg_image}
        alt={title}
        width={421}
        height={220}
        className={styles.card__image}
      />
      <div className={styles.card__content}>
        <h2 className={styles.card__title}>{title}</h2>
        <div className={styles.card__badges}>
          {badges.map((badge) => (
            <span key={badge} className={styles.card__badge}>
              {badge}
              {/* <Badge /> */}
            </span>
          ))}
        </div>
        <div className={styles.card__link}>
          <Link href={href} className={styles.card__link}>
            <span>Подробнее</span>
            <ChevronRight size={16} color="#ff2b44" />
          </Link>
        </div>
      </div>
    </div>
  );
};
