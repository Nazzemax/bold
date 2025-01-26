import Image from "next/image";
import styles from '@/app/components/layout/Footer/Footer.module.css';
import Link from 'next/link';
import instagram from'@/public/footer/instagramRed.svg';
import whatsapp from'@/public/footer/whatsapRed.svg';
import telegram from'@/public/footer/telegramRed.svg';
import Facebook from'@/public/footer/facebookRed.svg';
import BoldBrand from "@/public/footer/BoldBrands.svg"

export default function Home() {
  return (
    <div className={styles.Footer}>
      <div className={styles.BrandPrefs}>
        <Image
          src={BoldBrand}
          width={300}
          height={40}
          alt="" />
        <h5 className={styles.LogotypePrefs}>Bold Brands International ваш внешний отдел маркетинга</h5>
        <p className={styles.p}>Веб-дизайн  — <a href="https://aidarsopubekov.framer.ai/" className="text-red-600 underline"> aidarsopubekov.framer.ai</a></p>
      </div>
      <div className={styles.rightDiv}>
        <div className={styles.WeCompany}>
          <h1>О компании</h1>
          <Link href={"https://aidarsopubekov.framer.ai"}><p className="hover:text-red-600 ">О нас</p></Link>

          <Link href={"https://aidarsopubekov.framer.ai"}><p className="hover:text-red-600 ">Кейсы</p></Link>

          <Link href={"https://aidarsopubekov.framer.ai"}><p className="hover:text-red-600 ">Отзывы</p></Link>
        </div>
        <div className={styles.WeWork}>
          <h1>Услуги</h1>
          <Link href={"https://aidarsopubekov.framer.ai"}><p className="hover:text-red-600 ">Брендинг</p></Link>
          <Link href={"https://aidarsopubekov.framer.ai"}><p className="hover:text-red-600 ">SMM и контент-маркетинг</p></Link>
          <Link href={"https://aidarsopubekov.framer.ai"}><p className="hover:text-red-600 ">Видеопродакшн</p></Link>
          <Link href={"https://aidarsopubekov.framer.ai"}><p className="hover:text-red-600 ">Веб-разработка и дизайн</p></Link>
          <Link href={"https://aidarsopubekov.framer.ai"}><p className="hover:text-red-600 ">Цифровой маркетинг</p></Link>
          <Link href={"https://aidarsopubekov.framer.ai"}><p className="hover:text-red-600 ">Автоматизация и аналитика</p></Link>
        </div>
        <div className={styles.WeUs}>
          <h1>Мы есть</h1>
          <div className={styles.LinkPrefs}>
            <Link href={"https://www.instagram.com/"}><Image
            src={instagram}
            width={40}
            height={40}
            alt="" /></Link>
            <Link href={"https://www.facebook.com/?locale=ru_RU"}><Image
            src={Facebook}
            width={40}
            height={40}
            alt=""/></Link>
            <Link href={"https://telegram.org/"}><Image
            src={telegram}
            width={40}
            height={40}
            alt=""/></Link>
            <Link href={"https://www.whatsapp.com/"}><Image
            src={whatsapp}
            width={50}
            height={40}
            alt=""/></Link>
          </div>
        </div>
        <div className={styles.adress}>
          <p>Адрес(Бишкек)</p>
          <h1>Ул.Матросова, дом 102</h1>
          <p>Адрес(Ташкент)</p>
          <h1>Яшнободский район, Янгибозор 1</h1>
          <p>Телефон(Бишкек)</p>
          <h1>+996 999 50 44 44</h1>
          <p>Телефон(Ташкент)</p>
          <h1>+998 909 36 09 36</h1>
          <p>Электронная почта</p>
          <h1>info@boldbrands.kg</h1>
          <p>работаем</p>
          <h1>Пн — Пт 9:00 — 18:00</h1>
        </div>
      </div>
    </div>
  
);
}
