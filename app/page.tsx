import Advantages from "./components/advantages/Advantages";
import Challenges from "./components/challenges/Challenges";
import HeroSlider from "./components/heroSlider/HeroSlider";
import Partners from "./components/partners/Partners";

const advantages = [
  {
    title: "30+",
    subtitle: "опытных экспертов, которые работают на ваш результат",
  },
  {
    title: "Топ-1",
    subtitle:
      "маркетинговая компания по версии The Great Award of the Year 2023 за выдающиеся достижения в продвижении бизнеса.",
  },
  {
    title: "60+",
    subtitle:
      "успешных проектов, которые помогли нашим клиентам увеличить продажи на 189%",
  },
  {
    title: "35+",
    subtitle:
      "опыт в отраслях бизнеса — от салонов красоты до строительных компаний",
  },
];

export default function Home() {
  return (
    <div className="">
      <HeroSlider />
      {/* <Challenges /> */}
      {/* <Partners /> */}
      {/* <Advantages
        title={"Bold Brands International "}
        subtitle={
          "совместно создаём прочную основу и уверенное будущее для вашей компании"
        }
        subtitleStyle={{ color: "#FF2B44" }}
        advantages={advantages}
      /> */}
    </div>
  );
}

// Готовый Компонент для Страницы Услуги

{
  /* <Advantages
  subtitle={"O‘z-o‘zidan so‘zlaydigan raqamlar"}
  subtitleStyle={{ color: "#AAADB5" }}
  advantages={advantages}
  advantageStyle={{ flexDirection: "column-reverse" }}
/> */
}

// const advantages = [
//   {
//     title: "150+",
//     subtitle: "Muvaffaqiyatli SMM kampaniyalari",
//   },
//   {
//     title: "600%",
//     subtitle: "Reklamadan olingan ROI: gacha",
//   },
//   {
//     title: "+80%",
//     subtitle: "Mijozlarning o‘rtacha ariza o‘sishi:",
//   },
//   {
//     title: "1,5+",
//     subtitle: "million organik kontent ko‘rishlar soni",
//   },
// ];
