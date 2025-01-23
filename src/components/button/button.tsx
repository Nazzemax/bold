import React from 'react';
import './button.scss';
import iconButton from '../../assents/icon/Frame_268.png'
import Image from 'next/image';


const Button = () => {
  return (
    <button className="button">
      <span className="button__text">Отправить</span>
      <Image src={iconButton}/>
      {/* <svg
        className="button__icon"
        viewBox="0 0 24 24"
        src={iconButton}
        // xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 17l5-5-5-5v10z" />
      </svg> */}
    </button>
  );
};

export default Button;
