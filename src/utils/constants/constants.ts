import icon1 from "@/public/header/menu1.png";
import icon2 from "@/public/header/menu2.png";
import icon3 from "@/public/header/menu3.png";
import icon4 from "@/public/header/menu4.png";
import icon5 from "@/public/header/menu5.png";
import icon6 from "@/public/header/menu6.png";
import { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";

type ILink = {
  href: string;
  name: string;
  menu?: ILinkMenu[];
};

type ILinkMenu = {
  href: string;
  name: string;
  icon: StaticImageData;
};

export const links: ILink[] = [
  { href: "/", name: "Главная" },
  { href: "/about", name: "О нас" },
  { href: "/cases", name: "Кейсы" },
  {
    href: "/services",
    name: "Услуги",
    menu: [
      { href: "#", name: "Брендинг", icon: icon1 },
      { href: "#", name: "Digital продвижение", icon: icon2 },
      { href: "#", name: "Видеопродакшн", icon: icon3 },
      { href: "#", name: "Веб-разработка и дизайн", icon: icon4 },
      {
        href: "#",
        name: "Комплексное маркетинговое продвижение",
        icon: icon5,
      },
      { href: "#", name: "Внедрение CRM системы", icon: icon6 },
    ],
  },
  { href: "/contacts", name: "Контакты" },
];
