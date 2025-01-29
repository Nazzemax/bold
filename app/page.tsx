"use client";

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
      <div className="m-20">
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
