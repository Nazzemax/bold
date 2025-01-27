import React from 'react';
import './button.scss';
import iconButton from '../../assents/icon/Frame_268.png'
import Image from 'next/image';


const Button = () => {
  return (
    <button className="button">
      <span className="button__text">Отправить</span>
      <Image alt='Button for sending data' src={iconButton}/>
    </button>
  );
};

export default Button;
