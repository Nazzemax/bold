"use client";
import React from "react";
import styles from "./Modal.module.scss";
import Image from "next/image";
// import logoEllipse from "@/app/assets/icons/temporarelyReviewLogo.png";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  review: {
    name: string;
    position: string;
    company: string;
    text: string;
    fullText: string;
  } | null;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, review }) => {
  if (!isOpen || !review) return null;
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}></button>

        <div className={styles.header}>
          {/* <Image
            src={logoEllipse}
            alt="Company Logo"
            width={50}
            height={50}
            className={styles.logo}
          /> */}
          <div>
            <h2 className={styles.name}>{review.name}</h2>
            <p className={styles.position}>{review.position}</p>
          </div>
        </div>
        <p className={styles.company}>{review.company}</p>
        <div className={styles.text}>
          {review.fullText.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Modal;
