import { ServiceProps } from "./ui/types/ServiceProps";
import { ServiceItem } from "./ui/ServiceItem/ServiceItem";
import frameBg_1 from "@/public/services/brandingBg.svg";
import frameBg_2 from "@/public/services/digitalBg.svg";
import frameBg_3 from "@/public/services/videoprodBg.svg";
import frameBg_4 from "@/public/services/webDesignBg.svg";
import frameBg_5 from "@/public/services/marketingBg.svg";
import frameBg_6 from "@/public/services/analytycsBg.svg";

const services: ServiceProps[] = [
  {
    title: "Брендинг",
    badges: ["Брендинг и айдентика", "Нейминг", "Дизайн поддержка"],
    href: "/servies/branding",
    bg_image: frameBg_1,
  },
  {
    title: "Digital продвижение",
    badges: ["SMM", "Инфлюенс-маркетинг", "Контекстная реклама"],
    href: "/servies/branding",
    bg_image: frameBg_2,
  },
  {
    title: "Видеопродакшн",
    badges: ["Моушн-видео", "Аэросъемка", "Видеопроизводство"],
    href: "/servies/branding",
    bg_image: frameBg_3,
  },
  {
    title: "Веб-разработка и дизайн",
    badges: ["Разработка сайтов", "UX/UI дизайн", "Техническая поддержка"],
    href: "/servies/branding",
    bg_image: frameBg_4,
  },
  {
    title: "Комплексное маркетинговое сопровождение",
    badges: ["Сео-продвижение сайтов", "Контекстная и таргетированная реклама"],
    href: "/servies/branding",
    bg_image: frameBg_5,
  },
  {
    title: "Автоматизация и аналитика",
    badges: ["Внедрение CRM-систем", "Разработка и запуск воронок продаж"],
    href: "/servies/branding",
    bg_image: frameBg_6,
  },
];

export const Services = () => {
  return (
    <>
      <div className="relative flex justify-center items-center py-10 md:py-16 px-4 text-center">
        <div className="absolute inset-0 servicesBg bg-no-repeat bg-center md:bg-cover" />
        <h1 className="relative text-3xl md:text-5xl font-bold text-gray-900">
          Выводим компании в ТОП в <br className="hidden md:block" />
          Центральной Азии и за ее пределами
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-[1328px] mx-auto  m-5 md:m-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceItem key={service.title} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};
