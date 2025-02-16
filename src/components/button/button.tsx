import React, { ButtonHTMLAttributes, FC } from 'react';
import styles from './button.module.scss';
import iconButton from '../../assents/icon/Frame_268.png'
import Image from 'next/image';



interface ButtonProps {
  disabled?: boolean;
  isValid?: boolean;
}

const Button: React.FC<ButtonProps> =  ({disabled, isValid}) => {

  return (
    <button className={styles.button}>
      <span className={styles.button__text}>Отправить</span>
      <Image alt='Button for sending data' src={iconButton}/>
    </button>
  );
};

export default Button;
