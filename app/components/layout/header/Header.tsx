'use client'

import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
import Logo from '../../../../public/mainLogo.svg';
import arrowDown from '@/public/cases/arrowdown.svg';
import LanguageSelect from "../../ui/header/langSelect/LanguageSelect";

interface HeaderProps {
    bgColor?:string
}

const Header:React.FC<HeaderProps> = ({ bgColor }) => {
  return (
    <header 
        className={styles.header}
        style={{backgroundColor:bgColor || "transparent"}}>
      <div className={styles.container}>
        <div className={styles.top}>
        <div className={styles.logo}>
            <Image  height={31} style={{width:'auto'}} priority src={Logo} alt="Main logo" />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link href="/">Главная</Link>
            </li>
            <li>
              <Link href="/about">О нас</Link>
            </li>
            <li>
              <Link href="/cases">Кейсы</Link>
            </li>
            <li className={styles.menu}>
                <div className={styles.menu__item}>
                  <Link href="/services">Услуги</Link>
                  <Image src={arrowDown} alt="arrow down icon" />
                </div>
              <ul className={styles.submenu}>
                <li className={styles.submenu__item}>
                    Брендинг
                    <div className={styles.first}></div>
                </li>
                <li className={styles.submenu__item}>Digital продвижение
                <div className={styles.second}></div>
                </li>
                <li className={styles.submenu__item}>Видеопродакшн
                <div className={styles.third}></div>
                </li>
                <li className={styles.submenu__item}>Веб-разработка и дизайн
                <div className={styles.fourth}></div>
                </li>
                <li className={styles.submenu__item}>
                  Комплексное маркетинговое продвижение
                <div className={styles.fifth}></div>
                </li>
                <li className={styles.submenu__item}>Внедрение CRM системы
                <div className={styles.six}></div>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contacts">Контакты</Link>
            </li>
          </ul>
        </nav>
        <LanguageSelect />
        {/* <div className={styles.langSwitch}>
            <select className={styles.select} defaultValue={'РУ'}>
                <option value={'РУ'}>РУ</option>
                <option value={'АНГЛ'}>EN</option>
                <option value={'ТУРЕЦКИЙ'}>TU</option>
            </select>
            <div>
                <Image alt="arrow down" src={arrowDown} className={styles.arrowDown}  />
            </div>
        </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
