"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./shadcnUi/popover"
import styles from "./LanguageSelect.module.scss";
import langIcon from "@/public/cases/lang.svg";
import arrowDown from "@/public/cases/arrowdown.svg";

interface LanguageOption {
  code: string;
  label: string;
  full: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: "ru", label: "РУ", flag: "/header/russia.png", full: "Русский" },
  { code: "en", label: "EN", flag: "/header/english.png", full: "English" },
  { code: "uz", label: "UZ", flag: "/header/uzbek.png", full: "O'zbek" },
];

export default function LanguageSelect() {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>(
    languages[0]
  );

  const handleLanguageChange = (language: LanguageOption) => {
    setSelectedLanguage(language);
    console.log(`Selected language: ${language.code}`);
  };

  return (
    <Popover>
      <PopoverTrigger asChild className={styles.trigger} id="lang">
        <button className={styles.button}>
          <Image
            width={24}
            height={24}
            src={langIcon}
            alt={"lang-icon"}
            className={styles.button__icon}
          />
          <span className={styles.button__label}>{selectedLanguage.label}</span>
          <Image
            src={arrowDown}
            alt="arrow-icon"
            className={styles.button__arrow}
          />
        </button>
      </PopoverTrigger>

      <PopoverContent className={styles.dropdown}>
        {languages.map((language) => (
          <div
            key={language.code}
            className={`${styles.item} ${
              selectedLanguage.code === language.code
                ? styles["item--selected"]
                : ""
            }`}
            onClick={() => handleLanguageChange(language)}
          >
            <Image
              width={24}
              height={24}
              src={language.flag}
              alt={language.label}
              className={styles.item__flag}
            />
            <span className={styles.item__label}>{language.full}</span>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
