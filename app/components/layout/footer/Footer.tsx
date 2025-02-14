import Link from "next/link";
import Logo from "../../../../public/mainLogo.svg";
import styles from "./Footer.module.scss";
import Image from "next/image";
import instaIcon from "@/public/footer/insta.svg";
import facebookIcon from "@/public/footer/facebook.svg";
import whatsappIcon from "@/public/footer/whatsapp.svg";
interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__content}>
          <div className={styles.footer__brand}>
            <div>
              <Link href="/" className={styles.footer__logo}>
                <Image
                  height={31}
                  style={{ width: "auto" }}
                  priority
                  src={Logo}
                  alt="Main logo"
                />
              </Link>
              <p className={styles.footer__subtitle}>
                Bold Brands International ваш внешний отдел маркетинга
              </p>
            </div>
          </div>
          <div className={styles.footer__block}>
            <div className={styles.footer__column}>
              <h3 className={styles.footer__heading}>О компании</h3>
              <nav className={styles.footer__nav}>
                <Link href="/about" className={styles.footer__link}>
                  О нас
                </Link>
                <Link href="/cases" className={styles.footer__link}>
                  Кейсы
                </Link>
                <Link href="/reviews" className={styles.footer__link}>
                  Отзывы
                </Link>
              </nav>
            </div>
            <div className={styles.footer__column}>
              <h3 className={styles.footer__heading}>Услуги</h3>
              <nav className={styles.footer__nav}>
                <Link href="/services/branding" className={styles.footer__link}>
                  Брендинг
                </Link>
                <Link href="/services/digital" className={styles.footer__link}>
                  Digital продвижение
                </Link>
                <Link href="/services/video" className={styles.footer__link}>
                  Видеопродакшн
                </Link>
                <Link href="/services/web" className={styles.footer__link}>
                  Веб-разработка и дизайн
                </Link>
                <Link
                  href="/services/marketing"
                  className={styles.footer__link}
                >
                  Комплексное маркетинговое сопровождение
                </Link>
                <Link
                  href="/services/automation"
                  className={styles.footer__link}
                >
                  Автоматизация и аналитика
                </Link>
              </nav>
            </div>
            <div className={styles.footer__column}>
              <h3 className={styles.footer__heading}>Мы есть</h3>
              <div className={styles.footer__social}>
                <Link href={"/"}>
                  <Image src={instaIcon} alt="insta" />
                </Link>{" "}
                <Link href={"https://www.facebook.com/boldbrands.kg"}>
                  <Image src={facebookIcon} alt="facebook" />
                </Link>
                <Link href={"http://wa.me/996999992244"}>
                  <Image src={whatsappIcon} alt="whatsapp" />
                </Link>
              </div>
            </div>
            <div className={styles.footer__contact}>
              <div>
                <p className={styles["footer__contact-label"]}>
                  Адрес (Бишкек):
                </p>
                <p className={styles["footer__contact-value"]}>
                  ул. Матросова, дом 102
                </p>
              </div>
              <div>
                <p className={styles["footer__contact-label"]}>
                  Адрес (Ташкент)
                </p>
                <p className={styles["footer__contact-value"]}>
                  Яшнободский район, <br /> Янгибозор 1
                </p>
              </div>
            </div>
            <div className={styles.footer__contact}>
              <div>
                <p className={styles["footer__contact-label"]}>
                  Телефон (Бишкек)
                </p>
                <a
                  href="tel:+996999504444"
                  className={styles["footer__contact-value"]}
                >
                  +996 999 50 44 44
                </a>
              </div>
              <div>
                <p className={styles["footer__contact-label"]}>
                  Телефон (Ташкент)
                </p>
                <a
                  href="tel:+998909360936"
                  className={styles["footer__contact-value"]}
                >
                  +998 909 36 09 36
                </a>
              </div>
            </div>
            <div className={styles.footer__contact}>
              <div>
                <p className={styles["footer__contact-label"]}>
                  Электронная почта
                </p>
                <a
                  href="mailto:info@boldbrands.kg"
                  className={styles["footer__contact-value"]}
                >
                  info@boldbrands.kg
                </a>
              </div>
              <div>
                <p className={styles["footer__contact-label"]}>Работаем</p>
                <p className={styles["footer__contact-value"]}>
                  Пн — Пт 9:00 — 18:00
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <p className={styles.footer__copyright}>
            © 2024 Bold Brands International. Все права защищены
          </p>
          <Link href="/privacy" className={styles.footer__privacy}>
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
