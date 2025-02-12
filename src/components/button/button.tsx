import React from 'react';
import './button.scss';
import iconButton from '../../assents/icon/Frame_268.png'
import Image from 'next/image';

interface ButtonProps {
  disabled?: boolean;
  isValid?: boolean;
}

const Button: React.FC<ButtonProps> =  ({disabled, isValid}) => {
  return (
    <button className="button">
      <span className="button__text">Отправить</span>
      <Image alt='Button for sending data' src={iconButton}/>
    </button>
  );
};

export default Button;
