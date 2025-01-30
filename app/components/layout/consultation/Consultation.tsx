import React from "react";
import styles from "./Consultation.module.scss";
import Link from "next/link";
import map from "@/public/context-ad/map.png";
import email from "@/public/context-ad/email.png";
import phone from "@/public/context-ad/phone.png";
import Image from "next/image";
type Props = {};

export default function Consultation({}: Props) {
  return (
    <div
      className={styles.Consultation}
      style={{ backgroundImage: `url(${map.src})` }}
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>Получите бесплатную консультацию</h1>
          <h2>Оставьте контакты для связи, и мы перезвоним вам</h2>
          <div className={styles.info}>
            <div className={styles.phones}>
              <Image src={phone.src} alt="emails" width={32} height={32} />

              <div className={styles.phone}>
                <span>Телефон (Бишкек)</span>
                <span>+996 999 50 44 44</span>
              </div>
              <div className={styles.phone}>
                <span>Телефон (Ташкент)</span>
                <span>+998 909 36 09 36</span>
              </div>
            </div>
            <div className={styles.emails}>
              <Image src={email.src} alt="emails" width={32} height={32} />
              <div className={styles.email}>
                <span>Электронная почта</span>
                <span>info@boldbrands.kg</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.form}>
          <h3>Заполните форму и получите предложение</h3>
          <form>
            <label htmlFor="name">Имя</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="phone">Номер телефона</label>
            <input type="phone" name="phone" id="phone" />
            <label htmlFor="message">Сообщение</label>
            <textarea name="message" id="message" />
            <div>
              <div>
                <input type="checkbox" name="agreement" id="agreement" />
                <label htmlFor="agreement">
                  Я согласен на обработку моих данных в соответствии с{" "}
                  <Link href={"/politics"}>политикой конфиденциальности</Link>
                </label>
              </div>
              <div>
                <button>Отправить</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
