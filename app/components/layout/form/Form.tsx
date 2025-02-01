"use client";

import React, { useState } from "react";
import "../form/Form.scss";
import Image from "next/image";
import Link from "next/link";

interface Country {
  name: string;
  code: string;
  flag: string;
}

type PackedInfo = {
  order: boolean;
  type: string;
  service: string;
  name: string;
  phoneNumber: string;
  email: string;
  agree: boolean;
};

const typeBusiness: string[] = ["B2B", "B2C"];

const services: string[] = [
  "Брендинг",
  "SMM-продвижение",
  "Продакшн",
  "Дизайн",
  "Контекстная реклама",
  "Таргетированная реклама",
];

const countries: Country[] = [
  { name: "Кыргызстан", code: "+996", flag: "/form/countryCodeKyrgyz.svg" },
];

const Form: React.FC = () => {
  const [packedInfo, setPackedInfo] = useState<PackedInfo>({
    order: true,
    type: "",
    service: "",
    name: "",
    phoneNumber: "",
    email: "",
    agree: false,
  });

  const [selectedOptionsType, setSelectedOptionsType] = useState<string[]>([]);
  const [isOpenType, setIsOpenType] = useState<boolean>(false);
  const [selectedOptionsService, setSelectedOptionsService] = useState<
    string[]
  >([]);
  const [isOpenService, setIsOpenService] = useState<boolean>(false);

  // Проверка заполнения полей и чекбокса
  const handleButtonClick = () => {
    if (
      selectedOptionsType.length === 0 ||
      selectedOptionsService.length === 0
    ) {
      alert("Заполните поля");
      return;
    }

    setPackedInfo((prev) => ({
      ...prev,
      order: false,
      type: selectedOptionsType.join(", "),
      service: selectedOptionsService.join(", "),
    }));
  };

  const handleFormSubmit = () => {
    if (
      packedInfo.name &&
      packedInfo.phoneNumber &&
      packedInfo.email &&
      packedInfo.agree
    ) {
      window.location.reload();
    } else {
      alert("Заполните все поля перед отправкой!");
    }
  };

  //номер телефона
  const [countryCode, setCountryCode] = useState<string>(countries[0].code);
  const [isOpenCountry, setIsOpenCountry] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);

  const handleSelectCountry = (country: Country) => {
    setSelectedCountry(country);
    setCountryCode(country.code);
    setIsOpenCountry(false);
  };

  //чекбокс
  const handleCheckboxChange = () => {
    setPackedInfo((prev) => ({
      ...prev,
      agree: !prev.agree,
    }));
  };

  // Обработчики для бизнес-типов и услуг
  const handleSelectType = (option: string): void => {
    if (!selectedOptionsType.includes(option)) {
      setSelectedOptionsType([...selectedOptionsType, option]);
    }
    setIsOpenType(false);
  };

  const handleRemoveType = (option: string): void => {
    setSelectedOptionsType(
      selectedOptionsType.filter((item) => item !== option)
    );
  };

  const handleSelectService = (option: string): void => {
    setSelectedOptionsService((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleRemoveService = (option: string): void => {
    setSelectedOptionsService(
      selectedOptionsService.filter((item) => item !== option)
    );
  };

  // Обработчики для полей ввода
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPackedInfo((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPackedInfo((prev) => ({
      ...prev,
      phoneNumber: e.target.value,
    }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPackedInfo((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  };

  const handleAgreeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPackedInfo((prev) => ({
      ...prev,
      agree: e.target.checked,
    }));
  };

  return (
    <main className="form-main">
      <div className="form flex justify-center items-center">
        <div className="form-left flex flex-col">
          <h2 className="text-white font-bold">
            Рассчитайте стоимость услуги{" "}
          </h2>
          <span className="form-left-span-1 font-medium text-[#AAADB5]">
            Получите решение для вашего бизнеса!
          </span>

          <div id="form-left-phone">
            <div id="form-left-phone-1" className="flex flex-row gap-4">
              <div className="flex">
                <Image
                  src="/form/phoneIcon.svg"
                  alt="phoneIcon"
                  width={30}
                  height={30}
                  className="pr-1"
                ></Image>
                <div className="flex flex-col justify-start pl-1">
                  <span className="form-left-span-2 font-medium text-[#AAADB5]">
                    Телефон (Бишкек)
                  </span>
                  <span className="text-white font-medium form-left-span-2">
                    +996 999 50 44 44
                  </span>
                </div>
              </div>
              <div id="form-left-phone-2" className="flex flex-col justify-start pl-3">
                <span className="form-left-span-2 font-medium text-[#AAADB5]">
                  Телефон (Ташкент)
                </span>
                <span className="text-white font-medium form-left-span-2">
                  +998 909 36 09 36
                </span>
              </div>
            </div>

            <div className="form-left-phone-1-1 flex pt-2">
              <Image
                src="/form/emailIcon.svg"
                alt="emailIcon"
                width={30}
                height={30}
                className="pr-1"
              ></Image>
              <div className="flex flex-col justify-start pl-1">
                <span className="form-left-span-2 font-medium text-[#AAADB5]">
                  Электронная почта
                </span>
                <span className="text-white font-medium form-left-span-2">
                  info@boldbrands.kg
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Right First */}
        {packedInfo.order && (
          <div className="form-right-first form-right bg-[#18181A]">
            <span className="form-right-span-1 font-bold text-white">
              Заполните форму и получите предложение
            </span>

            <div className="form-right-circle-2 flex  pt-6 pb-6">
              <div className="flex gap-1">
                <Image
                  src="/form/circle1-form.svg"
                  alt="circle1-form"
                  width={45}
                  height={45}
                  className="form-image-circle pr-1 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
                ></Image>
                <div className="text-white flex flex-col ">
                  <span className="form-right-span-3">О вашем бизнесе</span>
                  <span className="form-left-span-2">Тип бизнеса и услуги</span>
                </div>
              </div>
              <div className="flex gap-1">
                <Image
                  src="/form/circle2-form.svg"
                  alt="circle2-form"
                  width={45}
                  height={45}
                  className="form-image-circle pb-6 pr-1 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
                ></Image>
                <div className="text-[#484A51] flex flex-col ">
                  <span className="form-right-span-3">Контактные данные</span>
                  <span className="form-left-span-2">
                    Ваши данные для связи
                  </span>
                </div>
              </div>
            </div>

            <div className="form-first-gap flex flex-col gap-6">
              <div className="relative w-full max-w-md">
                <label className="text-[#696B74] form-input-text-top">
                  Тип бизнеса
                </label>
                <div
                  className="form-typeBusiness flex flex-row justify-between size-lvw border border-t-0 border-l-0 border-r-0 border-b-[#696B74] bg-[#18181A] text-white p-2 cursor-pointer"
                  onClick={() => setIsOpenType(!isOpenType)}
                >
                  <div className=" flex flex-wrap gap-2">
                    {selectedOptionsType.map(
                      (option: string, index: number) => (
                        <span
                          key={index}
                          className="form-typeBusines-span bg-[#414141] text-white px-2 py-1 rounded flex items-center gap-1"
                        >
                          {option}
                          <button
                            className="text-[#696B74]"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveType(option);
                            }}
                          >
                            &times;
                          </button>
                        </span>
                      )
                    )}
                  </div>
                  <Image
                    src="/form/inputIconSelect.svg"
                    alt="input Icon Select"
                    width={20}
                    height={20}
                  ></Image>
                </div>
                {isOpenType && (
                  <div className="absolute w-full bg-white text-[#2A2D35] mt-1 rounded-xl shadow-lg max-h-40 overflow-y-auto z-10">
                    {typeBusiness.map((option) => (
                      <div
                        key={option}
                        className="p-4 cursor-pointer hover:bg-[#F1F3F7]"
                        onClick={() => {
                          handleSelectType(option);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
                <span className="form-input-text-bottom text-[#AAADB5]">
                  Это поможет нам лучше понять ваш бизнес и предложить
                  оптимальное решение
                </span>
              </div>

              {/* Services */}
              <div className="relative w-full max-w-md">
                <label className="text-[#696B74] form-input-text-top">
                  Какая услуга вам нужна?
                </label>
                <div
                  className="form-typeBusiness flex flex-row justify-between border border-t-0 border-l-0 border-r-0 border-b-[#696B74] bg-[#18181A] text-white p-2 cursor-pointer"
                  onClick={() => setIsOpenService(!isOpenService)}
                >
                  <div className="form-service flex flex-wrap gap-2">
                    {selectedOptionsService.map((option, index) => (
                      <span
                        key={index}
                        className="form-typeBusines-span bg-[#414141] text-white px-2 py-1 rounded flex items-center gap-1"
                      >
                        {option}
                        <button
                          className="text-[#696B74]"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveService(option);
                          }}
                        >
                          &times;
                        </button>
                      </span>
                    ))}
                  </div>
                  <Image
                    src="/form/inputIconSelect.svg"
                    alt="input Icon Select"
                    width={20}
                    height={20}
                  />
                </div>
                {isOpenService && (
                  <div className="absolute w-full bg-white text-[#2A2D35] mt-1 rounded-xl shadow-lg max-h-40 overflow-y-auto z-10">
                    {services.map((option, index) => (
                      <label
                        key={index}
                        className="flex items-center p-4 cursor-pointer hover:bg-[#F1F3F7]"
                      >
                        <input
                          type="checkbox"
                          checked={selectedOptionsService.includes(option)}
                          onChange={() => handleSelectService(option)}
                          className="mr-2 w-5 h-5 border border-gray-400 rounded appearance-none checked:bg-[#FF2B44] checked:border-[#FF2B44] checked:flex checked:items-center checked:justify-center before:content-['✔'] before:text-white before:text-sm before:font-bold before:hidden checked:before:block"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}
                <span className="form-input-text-bottom text-[#AAADB5]">
                  Мы адаптируем стратегию под ваши цели и платформы
                </span>
              </div>

              {/* Continue Button */}
              <button
                className="form-button-red bg-[#FF2B44] text-white sm:w-auto"
                onClick={handleButtonClick}
              >
                <span>Продолжить</span>
                <Image
                  src="/form/formButton.svg"
                  alt="formButton"
                  width={38}
                  height={38}
                  className="form-image-button sm:w-4 sm:h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8"
                />
              </button>
            </div>
          </div>
        )}

        {/* Form Right Second */}
        {!packedInfo.order && (
          <div className="form-right-second form-right bg-[#18181A] p-10">
            <span className="form-right-span-1 font-bold text-white">
              Заполните форму и получите предложение
            </span>

            <div className="form-right-circle-2 flex flex-row justify-between pt-6 pb-6">
              <div className="flex gap-1">
                <Image
                  src="/form/circle3-form.svg"
                  alt="circle3-form"
                  width={45}
                  height={45}
                  className="form-image-circle pb-6 pr-1 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
                ></Image>
                <div className="text-[#484A51] flex flex-col ">
                  <span className="form-right-span-3">О вашем бизнесе</span>
                  <span className="form-left-span-2">Тип бизнеса и услуги</span>
                </div>
              </div>
              <div className="flex gap-1">
                <Image
                  src="/form/circle4-form.svg"
                  alt="circle4-form"
                  width={45}
                  height={45}
                  className="form-image-circle pb-6 pr-1 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
                ></Image>
                <div className="text-white flex flex-col ">
                  <span className="form-right-span-3">Контактные данные</span>
                  <span className="form-left-span-2">
                    Ваши данные для связи
                  </span>
                </div>
              </div>
            </div>

            <div className="form-input-gap-2 flex flex-col">
              <div className="w-full max-w-md">
                <label className="text-[#696B74] form-input-text-top">
                  Имя
                </label>
                <input
                  type="text"
                  placeholder="Введите имя"
                  className="form-input w-full flex flex-row justify-between size-lvw border border-t-0 border-l-0 border-r-0 border-b-[#696B74] bg-[#18181A] text-white p-2 cursor-pointer placeholder-[#696B74]"
                  value={packedInfo.name}
                  onChange={handleNameChange}
                />
              </div>

              {/* Номер телефона */}
              <div className="w-full max-w-md relative">
                <label className="text-[#696B74] form-input-text-top">
                  Номер телефона
                </label>
                <div className="flex items-center space-x-2">
                  <div
                    className="form-input flex items-center border border-t-0 border-l-0 border-r-0 border-b-[#696B74] bg-[#18181A] text-white p-2 cursor-pointer"
                    onClick={() => setIsOpenCountry(!isOpenCountry)}
                  >
                    <Image
                      src={selectedCountry.flag}
                      alt={selectedCountry.name}
                      width={20}
                      height={15}
                      className="mr-2"
                    />
                    <span>{selectedCountry.code}</span>
                    <Image
                      src="/form/inputIconSelect.svg"
                      alt="dropdown arrow"
                      width={20}
                      height={20}
                      className="ml-2"
                    />
                  </div>

                  {isOpenCountry && (
                    <div className="form-input absolute left-0 top-full w-40 bg-white text-[#2A2D35] mt-1 rounded-xl shadow-lg max-h-40 overflow-y-auto z-10">
                      {countries.map((country, index) => (
                        <div
                          key={index}
                          className="p-2 cursor-pointer flex items-center hover:bg-[#F1F3F7]"
                          onClick={() => handleSelectCountry(country)}
                        >
                          <Image
                            src={country.flag}
                            alt={country.name}
                            width={20}
                            height={15}
                            className="mr-2"
                          />
                          {country.name}
                        </div>
                      ))}
                    </div>
                  )}

                  <input
                    type="text"
                    placeholder="Введите номер телефона"
                    className="form-input w-3/4 flex flex-row justify-between size-lvw border border-t-0 border-l-0 border-r-0 border-b-[#696B74] bg-[#18181A] text-white p-2 cursor-pointer placeholder-[#696B74]"
                    value={packedInfo.phoneNumber}
                    onChange={handlePhoneChange}
                  />
                </div>
              </div>

              <div className="w-full max-w-md">
                <label className="text-[#696B74] form-input-text-top">
                  Электронная почта
                </label>
                <input
                  type="text"
                  placeholder="Введите электронную почту"
                  className="form-input w-full flex flex-row justify-between size-lvw border border-t-0 border-l-0 border-r-0 border-b-[#696B74] bg-[#18181A] text-white p-2 cursor-pointer placeholder-[#696B74]"
                  value={packedInfo.email}
                  onChange={handleEmailChange}
                />
              </div>

              <div
                className="flex flex-row items-center space-x-4"
                id="form-checkbox-button"
              >
                <div className="flex flex-row">
                  <input
                    type="checkbox"
                    id="form-checkbox-input"
                    className="mr-2 border border-gray-400 rounded appearance-none 
            checked:bg-[#FF2B44] checked:border-[#FF2B44] 
            before:content-['✔'] before:text-white before:text-sm before:font-bold before:hidden 
            checked:before:block"
                    checked={packedInfo.agree}
                    onChange={handleCheckboxChange}
                  />
                  <span className="text-[#AAADB5] form-right-span-2">
                    Я согласен на обработку моих данных в соответствии с
                    <Link href="/" className="text-[#FF2B44] underline ml-1">
                      политикой конфиденциальности
                    </Link>
                  </span>
                </div>

                <button
                  className={`form-button-disabled mt-1 px-4 py-2 rounded flex items-center space-x-1 
          ${
            packedInfo.agree
              ? "bg-[#FF2B44] text-white"
              : "bg-[#313336] text-[#484A51]"
          }`}
                  onClick={handleFormSubmit}
                >
                  <span>Отправить</span>
                  <Image
                    src="/form/formButton.svg"
                    alt="formButton"
                    width={38}
                    height={38}
                    className="form-image-button w-6 h-6 sm:w-4 sm:h-4 lg:w-6 lg:h-6"
                  />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Form;
