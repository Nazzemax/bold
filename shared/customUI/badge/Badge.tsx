import { cn } from "@/shared/utils/utils";
import Image from "next/image";

import styles from "./Badge.module.scss";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: string;
}

export const Badge = ({ className, children, icon }: BadgeProps) => {
  return (
    <div className={cn(styles.button, className)}>
      {icon && (
        <Image
          src={icon}
          alt="icon"
          width={20}
          height={20}
          className={styles.button__icon}
        />
      )}
      <span className={styles.button__text}>{children}</span>
    </div>
  );
};
