import Banner from "@/features/home/components/banner/Banner";
import Challenges from "@/features/home/components/challenges/Challenges";
import Partners from "@/widgets/partners/Partners";
import VideoPlayButton from "@/widgets/videoButton/VideoButton";
import Advantages from "@/widgets/advantages/Advantages";
import MarketingSection from "@/features/home/components/marketingSection/MarketingSection";
import { Award } from "@/features/home/components/award/Award";
import { FormContactUs } from "@/widgets/Forms/FormContactUs";
import { Services } from "@/features/home/components/Services2/Services";
import DiagnosticBanner from "@/features/home/components/diagnosticBanner/DiagnosticBanner";
import { Reviews } from "@/widgets/reviewsSlider/ReviewsSlider";

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
      {/* Нужно Переделать  */}
      <Banner />

      {/* Нужен Адаптив */}
      <MarketingSection />

      {/* Нужен Адаптив */}
      <VideoPlayButton />

      {/* Готово полностю */}
      <Advantages
        title={"Bold Brands International "}
        subtitle={
          "совместно создаём прочную основу и уверенное будущее для вашей компании"
        }
        subtitleStyle={{ color: "#FF2B44" }}
        advantages={advantages}
      />

      {/* Готово полностю  */}
      <Challenges />

      {/*  Нужно переписать на scss   */}
      <Services />

      {/* Готово полностю  */}
      <DiagnosticBanner />

      {/* Готово полностю  */}
      <Award />

      {/* Готово полностю  */}
      <Partners />

      {/* Нужно улучшить  */}
      <Reviews />

      {/* Готово полностю  */}
      <FormContactUs />
    </div>
  );
}
