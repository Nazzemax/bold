import { ServiceProps } from "@/app/types/service";
import { ServiceItem } from "../../ui/service-item";

const services: ServiceProps[] = [
  {
    title: "Брендинг",
    badges: ["Брендинг и айдентика", "Нейминг", "Дизайн поддержка"],
    href: '/servies/branding',
    bg_image: "/services/service_1.svg"
  },
  {
    title: "Digital продвижение",
    badges: ["SMM", "Инфлюенс-маркетинг", "Контекстная реклама"],
    href: '/servies/branding',
    bg_image: "/services/service_2.svg"
  },
  {
    title: "Видеопродакшн",
    badges: ["Моушн-видео", "Аэросъемка", "Видеопроизводство"],
    href: '/servies/branding',
    bg_image: "/services/service_3.svg"
  },
  {
    title: "Веб-разработка и дизайн",
    badges: ["Разработка сайтов", "UX/UI дизайн", "Техническая поддержка"],
    href: '/servies/branding',
    bg_image: "/services/service_4.svg"
  },
  {
    title: "Комплексное маркетинговое сопровождение",
    badges: ["Сео-продвижение сайтов", "Контекстная и таргетированная реклама"],
    href: '/servies/branding',
    bg_image: "/services/service_5.svg"
  },
  {
    title: "Автоматизация и аналитика",
    badges: ["Внедрение CRM-систем", "Разработка и запуск воронок продаж"],
    href: '/servies/branding',
    bg_image: "/services/service_6.svg"
  },
]

export const Services = () => {


  return (
    <>
      <div className="relative w-full flex justify-center items-center py-10 md:py-16 px-4 text-center">
        <div className="absolute inset-0 bg-[url('/services/bg.svg')] bg-no-repeat bg-center md:bg-cover" />
        <h1 className="relative text-3xl md:text-5xl font-bold text-gray-900">
          Выводим компании в ТОП в <br className="hidden md:block" />
          Центральной Азии и за ее пределами
        </h1>
      </div>
      <div className=" m-5 md:m-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceItem
            key={service.title}
            {...service}
          />
        ))}
      </div>
    </>
  )
}
