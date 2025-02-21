"use cliet";

import { Button } from "@/shared/ui/button";
import arrowIcon from "@/public/banner/Arrow.svg";

import styles from "./CustomButton.module.scss";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Props = {
  text: string;
};

export const CustomButton: React.FC<Props> = ({ text }) => {
  return (
    <Button  className={styles.btn}>
      {text}
      <span>
        <Image src={arrowIcon} alt="" className={styles.btn__arrowImg} />
        <ArrowRight
          strokeWidth={3}
          size={32}
          className={styles.btn__arrow}
        />
      </span>
    </Button>
  );
};
