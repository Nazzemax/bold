"use client";
import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
import Logo from "@/app/assets/icons/logo.svg";
import LanguageSelect from "@/src/utils/i18n/LanguageSelect";
import { useEffect, useRef, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./shadcnUi/NavigationMenu";
import { usePathname } from "next/navigation";
import { HeaderAccordion } from "./ui/HeaderAccordion/HeaderAccordion";
import { links } from "@/src/utils/constants/constants";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const pathname = usePathname();

  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(window.scrollY >= 120);
  const scrollPos = useRef(window.scrollY);

  useEffect(() => {
    const initialScrollPos = window.scrollY;
    setHasScrolled(initialScrollPos >= 120);
    scrollPos.current = initialScrollPos;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = scrollPos.current > currentScrollPos;
      setIsVisible(visible);
      setHasScrolled(currentScrollPos >= 120);
      scrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        ${styles.header} 
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${hasScrolled ? styles.header__scrolled : ""}
      `}
    >
      <div className={styles.header__container}>
        <Link href={"/"} className={styles.header__logo}>
          <Image
            height={31}
            style={{ width: "auto" }}
            priority
            src={Logo}
            alt="Main logo"
          />
        </Link>
        <nav className={styles.header__nav}>
          <ul className={styles.header__navList}>
            {links.map((item) =>
              !item.menu ? (
                <li key={`${item.name}-${item.href}`}>
                  <Link
                    href={item.href}
                    className={
                      pathname === item.href ? styles.header__linkActive : ""
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              ) : (
                <NavigationMenu key={`${item.name}-${item.href}`}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        <Link href={item.href}>{item.name}</Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className={styles.header__menu}>
                        {item.menu.map((subitem) => (
                          <Link
                            key={`${subitem.name}-${subitem.href}`}
                            href={subitem.href}
                            className={styles.header__menuLink}
                          >
                            <Image
                              width={20}
                              height={20}
                              src={subitem.icon}
                              alt={"icon"}
                            />
                            <span>{subitem.name}</span>
                          </Link>
                        ))}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              )
            )}
          </ul>
        </nav>
        <div className={styles.header__block}>
          <LanguageSelect />
          {/* Header Mobile */}
          <HeaderAccordion />
        </div>
      </div>
    </header>
  );
};
