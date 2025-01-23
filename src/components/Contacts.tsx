"use client"
import React, { useState } from "react";
import style from "./Contacts.module.scss";
import Image from 'next/image';
import icon1 from '../assents/icon/Frame_239.png'
import icon2 from '../assents/icon/Frame_241.png'
import Button from "./button/button";
import Form from "./form/form";

const Contacts: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isAgree, setIsAgree] = useState(false);

  // Проверяем, заполнены ли все поля и согласие на обработку данных
  const isFormValid = name && phone && email && isAgree;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => setIsAgree(e.target.checked);

  function handleFormSubmit(name: string, phone: string, email: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className={style.contacts}>
      <div className={style.container}>
        {/* Левая часть */}
        <div className={style.left}>
          <h1 className={style.title}>Свяжитесь с нами!</h1>
          <p className={style.subtitle}>
            Оставьте контакты для связи, и мы перезвоним вам
          </p>
          <div className={style.contactDetails}>
            <div className={style.contactPosition}>
            <div className={style.contactItem}>
              <Image src={icon2} alt="Телефон" className={style.icon} />
              <div>
                <p className={style.contactLabel}>Телефон (Бишкек)</p>
                <p className={style.contactValue}>+996 999 50 44 44</p>
              </div>
            </div>
            <div className={style.contactItem}>
              {/* <Image src="" alt="Телефон" className={style.icon} /> */}
              <div>
                <p className={style.contactLabel}>Телефон (Ташкент)</p>
                <p className={style.contactValue}>+996 999 50 44 44</p>
              </div>
            </div>
            </div>
            <div className={style.contactItem}>
              <Image src={icon1} alt="Электронная почта" className={style.icon} />
              <div>
                <p className={style.contactLabel}>Электронная почта</p>
                <p className={style.contactValue}>info@boldbrands.kg</p>
              </div>
            </div>
          </div>
        </div>

        {/* Правая часть */}
        <div className={style.right}>
          <h2 className={style.formTitle}>
            Заполните форму и получите предложение
          </h2>
          <Form onSubmit={handleFormSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
