'use client'

import { useState } from "react";
import styles from "./LanguageSelect.module.scss"; // Импорт модульных стилей
import Image from "next/image";
import langIcon from '@/public/cases/lang.svg'
import arrowDown from '@/public/cases/arrowdown.svg'

interface LanguageOption {
  code: string;
  label: string;
  full:string;
  flag: string; // Путь к иконке флага
}

const languages: LanguageOption[] = [
  { code: "ru", label: "РУ", flag: '/header/russia.png' , full:'Русский'},
  { code: "en", label: "EN", flag: '/header/english.png', full:'English' },
  { code: "uz", label: "UZ", flag: '/header/uzbek.png' , full:"O'zbek"}, 
];

export default function LanguageSelect() {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (language: LanguageOption) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    console.log(`Selected language: ${language.code}`); // Здесь можно добавить смену языка
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    // Close the dropdown only if focus moves outside the parent container
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div  
         className={styles["language-select"]}
         tabIndex={0}
         onBlur={handleBlur}
         >
      <button
       
        className={styles["language-select__button"]}
        onClick={() => setIsOpen(!isOpen)}
      >
         <Image
        width={16}
        height={16}
          src={langIcon}
          alt={selectedLanguage.label}
          className={styles["language-select__flag"]}
        />
        <span>{selectedLanguage.label}</span>
        <span
          className={`${isOpen ? styles["language-select__button__icon__open"] : styles["language-select__button__icon"]
          }`}
        >
            <Image src={arrowDown}  alt="arrow down icon" />
        </span>
      </button>

      {isOpen && (
        <ul className={styles["language-select__dropdown"]}>
          {languages.map((language) => (
            <li
              key={language.code}
              className={`${styles["language-select__dropdown__item"]} ${
                selectedLanguage.code === language.code ? styles["selected"] : ""
              }`}
              onClick={() => handleLanguageChange(language)}
            >
              <Image
                height={24}
                src={language.flag}
                alt={language.label}
                className={styles["language-select__flag"]}
                width={24}
              />
              <span>{language.full}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
