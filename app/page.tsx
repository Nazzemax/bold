"use client";

import Link from "next/link";
import Header from "./components/layout/header/Header";
import Swiper from "./components/ui/swiper";
import { CaseCard } from "./components/ui/swiper/case-card";
import { ICaseCard } from "./components/ui/swiper/type";

export default function Home() {
  const cases: ICaseCard[] = [
    {
      id: '1',
      img: '/cases/test.png',
      title: "Привлекли клиентов на сумму 130 000 $ в агентство недвижимости за 1,5 недели",
      company: "Корейский ресторан",
      date: "15 дек. 2023",
      instagramFollowers: 10500,
      tiktokViews: 1500000
    },
    {
      id: '2',
      img: '/cases/test.png',
      title: "Привлекли клиентов на сумму 130 000 $ в агентство недвижимости за 1,5 недели",
      company: "Корейский ресторан",
      date: "15 дек. 2023",
      instagramFollowers: 10500,
      tiktokViews: 1500000
    },
    {
      id: '3',
      img: '/cases/test.png',
      title: "Привлекли клиентов на сумму 130 000 $ в агентство недвижимости за 1,5 недели",
      company: "Корейский ресторан",
      date: "15 дек. 2023",
      instagramFollowers: 105000,
      tiktokViews: 1500000
    },
    {
      id: '4',
      img: '/cases/test.png',
      title: "Привлекли клиентов на сумму 130 000 $ в агентство недвижимости за 1,5 недели",
      company: "Корейский ресторан",
      date: "15 дек. 2023",
      instagramFollowers: 105000,
      tiktokViews: 1500000
    }
  ]

  return (
    <>
      <Header bgColor="black" />
      
      {/* Верстка временная, в дальнейшем вынести в layout или ui */}
      <div className="mx-auto px-10 py-20 max-w-[1808px]">
        <div className="flex flex-col lg:flex-row justify-between mb-16">
          <div className="text-4xl font-bold w-full md:text-6xl">Как мы помогли другим бизнесам вырасти?</div>
          <Link href={'/cases'} className="flex items-end gap-2 w-2/6">
              <span className="pb-0.5 text-[#FF2B44]">Все кейсы</span>
              <img src="/cases/redArrowRight.svg" />
          </Link>
        </div>
        <Swiper
          loop
          // autoplay
          // autoplayDelay={5000}
          // slidesPerView={3}
        >
          {cases.map((caseItem) => (
            <CaseCard
              key={caseItem.id}
              img={caseItem.img}
              title={caseItem.title}
              company={caseItem.company}
              date={caseItem.date}
              instagramFollowers={caseItem.instagramFollowers}
              tiktokViews={caseItem.tiktokViews}
            />

          ))}
        </Swiper>
      </div>

    </>
  );
}
