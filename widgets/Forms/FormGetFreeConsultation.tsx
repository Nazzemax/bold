"use client";
import React, { useEffect, useState } from "react";
import "./Form.scss";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoIosAlert } from "react-icons/io";

interface Country {
  name: string;
  code: string;
  flag: string;
}

interface ContactInfo {
  bishkek: string;
  tashkent: string;
}

interface TextLeft {
  title: string;
  text: string;
  phoneNumbers: ContactInfo;
  emailLeft: string;
}

const textLeft: TextLeft = {
  title: "Получите бесплатную консультацию",
  text: "Оставьте контакты для связи, и мы перезвоним вам",
  phoneNumbers: { bishkek: "+996 999 50 44 44", tashkent: "+998 909 36 09 36" },
  emailLeft: "info@boldbrands.kg",
};

const countries: Country[] = [
  { name: "Кыргызстан", code: "+996", flag: "/form/countryCodeKyrgyz.svg" },
  { name: "США", code: "+1", flag: "/form/countryCodeUSA.svg" },
  { name: "Узбекистан", code: "+998", flag: "/form/countryCodeUzb.svg" },
  { name: "Россия", code: "+7", flag: "/form/countryCodeRussia.svg" },
];

// Валидация для второго шага
const stepTwoSchema = z.object({
  name: z.string().min(2, "Имя обязательно"),
  phoneNumber: z.string().min(6, "Введите номер телефона"),
  email: z.string().email("Некорректный email"),
  agree: z.boolean().refine((val) => val === true, {
    message: "Вы должны согласиться с условиями",
  }),
});

type StepTwoValues = z.infer<typeof stepTwoSchema>;

export const FormGetFreeConsultation: React.FC = () => {
  const [countryCode, setCountryCode] = useState<string>("+996");
  const [isOpenCountry, setIsOpenCountry] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);

  // Форма второго шага
  const {
    register: registerStepTwo,
    handleSubmit: handleSubmitStepTwo,
    setValue: setValueStepTwo,
    getValues: getValuesStepTwo,
    reset: resetStepTwo,
    watch: watchStepTwo,
    formState: { errors: errorsStepTwo },
  } = useForm<StepTwoValues>({
    resolver: zodResolver(stepTwoSchema),
    defaultValues: {
      name: "",
      phoneNumber: countryCode,
      email: "",
      agree: false,
    },
  });

  // Обновление кода страны и номера
  const handleCountryChange = (country: Country): void => {
    setSelectedCountry(country);
    setCountryCode(country.code);
    setValueStepTwo("phoneNumber", country.code);
    setIsOpenCountry(false);
  };

  // Чекбокс
  const agreeValue: boolean = watchStepTwo("agree");

  // Обработка второго шага
  const onSubmitStepTwo = (data: StepTwoValues): void => {
    const fullFormData = {
      ...data,
    };
    console.log("Отправленные данные:", fullFormData);

    resetStepTwo({
      name: "",
      phoneNumber: countryCode,
      email: "",
      agree: false,
    });
  };

  return (
    <main className="form-main">
      <div className="form flex justify-center items-center">
        <div className="form-left flex flex-col">
          <h2 className="text-white font-bold leading-[1.1]">
            {textLeft.title}
          </h2>
          <span className="form-left-span-1 font-medium text-[#AAADB5] form-freeConsultation">
            {textLeft.text}
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
                    {textLeft.phoneNumbers.bishkek}
                  </span>
                </div>
              </div>
              <div
                id="form-left-phone-2"
                className="flex flex-col justify-start pl-3"
              >
                <span className="form-left-span-2 font-medium text-[#AAADB5]">
                  Телефон (Ташкент)
                </span>
                <span className="text-white font-medium form-left-span-2">
                  {textLeft.phoneNumbers.tashkent}
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
                  {textLeft.emailLeft}
                </span>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmitStepTwo(onSubmitStepTwo)}
          className="form-right-second form-right bg-[#18181A] p-10 flex flex-col gap-8"
        >
          <span className="form-right-span-1 font-bold text-white ">
            Заполните форму и получите предложение
          </span>

          <div className="form-input-gap-2 flex flex-col">
            <div className="w-full max-w-md">
              <label className="text-[#696B74] form-input-text-top">Имя</label>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Введите имя"
                  className={`form-input w-full flex flex-row justify-between size-lvw border border-t-0 border-l-0 border-r-0 
    bg-[#18181A] text-white p-2 cursor-pointer placeholder-[#696B74] 
    ${
      errorsStepTwo.name
        ? "border-b-[#FF566A] text-[#FF566A]"
        : "border-b-[#696B74] text-white"
    }`}
                  {...registerStepTwo("name")}
                />
                <IoIosAlert
                  className={`text-[#FF566A] w-6 h-6 absolute form-input-error-icon-1 ${
                    errorsStepTwo.name ? "block" : "hidden"
                  }`}
                />
              </div>

              {errorsStepTwo.name && (
                <p style={{ color: "#FF566A" }}>{errorsStepTwo.name.message}</p>
              )}
            </div>

            {/* Номер телефона */}
            <div className="w-full max-w-md relative">
              <label className="text-[#696B74] form-input-text-top">
                Номер телефона
              </label>
              <div className="flex items-center">
                <div
                  className={`form-input form-input-flag flex items-center border border-t-0 border-l-0 border-r-0  bg-[#18181A] cursor-pointer ${
                    errorsStepTwo.phoneNumber
                      ? "border-b-[#FF566A] text-[#FF566A]"
                      : "border-b-[#696B74] text-white"
                  }`}
                  onClick={() => setIsOpenCountry(!isOpenCountry)}
                >
                  <Image
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    width={20}
                    height={15}
                    className="mr-1"
                  />
                  <Image
                    src="/form/inputIconSelect.svg"
                    alt="dropdown arrow"
                    width={20}
                    height={20}
                  />
                </div>

                {isOpenCountry && (
                  <div className="form-input absolute left-0 top-full w-40 bg-white text-[#2A2D35] mt-1 rounded-xl shadow-lg max-h-40 overflow-y-auto z-10">
                    {countries.map((country, index) => (
                      <div
                        key={index}
                        className="p-2 cursor-pointer flex items-center hover:bg-[#F1F3F7]"
                        onClick={() => handleCountryChange(country)}
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
                  {...registerStepTwo("phoneNumber")}
                  placeholder="Введите номер телефона"
                  className={`form-input w-11/12 flex flex-row justify-between size-lvw border border-t-0 border-l-0 border-r-0  bg-[#18181A] p-2 cursor-pointer placeholder-[#696B74] ${
                    errorsStepTwo.phoneNumber
                      ? "border-b-[#FF566A] text-[#FF566A]"
                      : "border-b-[#696B74] text-white"
                  }`}
                />

                <IoIosAlert
                  className={`text-[#FF566A] w-6 h-6 absolute form-input-error-icon ${
                    errorsStepTwo.phoneNumber ? "block" : "hidden"
                  }`}
                />
              </div>
              {errorsStepTwo.phoneNumber && (
                <p style={{ color: "#FF566A" }}>
                  {errorsStepTwo.phoneNumber.message}
                </p>
              )}
            </div>

            <div className="w-full max-w-md">
              <label className="text-[#696B74] form-input-text-top">
                Электронная почта
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  {...registerStepTwo("email")}
                  placeholder="Введите электронную почту"
                  className={`form-input w-full flex flex-row justify-between size-lvw border border-t-0 border-l-0 border-r-0  bg-[#18181A] p-2 cursor-pointer placeholder-[#696B74] ${
                    errorsStepTwo.email
                      ? "border-b-[#FF566A] text-[#FF566A]"
                      : "border-b-[#696B74] text-white"
                  }`}
                />
                <IoIosAlert
                  className={`text-[#FF566A] w-6 h-6 absolute form-input-error-icon-1 ${
                    errorsStepTwo.phoneNumber ? "block" : "hidden"
                  }`}
                />
              </div>
              {errorsStepTwo.email && (
                <p style={{ color: "#FF566A" }}>
                  {errorsStepTwo.email.message}
                </p>
              )}
            </div>

            <div
              className="flex flex-row items-center space-x-4"
              id="form-checkbox-button"
            >
              <div className="flex flex-row">
                <input
                  type="checkbox"
                  {...registerStepTwo("agree")}
                  id="form-checkbox-input"
                  className="mr-2 border border-gray-400 rounded appearance-none 
            checked:bg-[#FF2B44] checked:border-[#FF2B44] 
            before:content-['✔'] before:text-white before:text-sm before:font-bold before:hidden 
            checked:before:block flex items-center justify-center"
                />
                <span className="text-[#AAADB5] form-right-span-2">
                  Я согласен на обработку моих данных в соответствии с
                  <Link href="/" className="text-[#FF2B44] underline ml-1">
                    политикой конфиденциальности
                  </Link>
                  {errorsStepTwo.agree && (
                    <p style={{ color: "#FF566A" }}>
                      {errorsStepTwo.agree.message}
                    </p>
                  )}
                </span>
              </div>

              <button
                type="submit"
                className={`form-button-disabled mt-1 px-4 py-2 rounded flex items-center space-x-1
                  ${
                    agreeValue
                      ? "bg-[#FF2B44] text-white"
                      : "bg-[#313336] text-[#484A51]"
                  }`}
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
        </form>
      </div>
    </main>
  );
};
