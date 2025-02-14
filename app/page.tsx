import { Banner } from "@/src/modules/HomeModules/Banner/Banner";
import Advantages from "@/src/UI/ui_components/Advantages/Advantages";
import { Partners } from "@/src/UI/ui_components/Partners/Partners";
import { Challenges } from "@/src/modules/HomeModules/Challenges/Challenges";
import VideoPlayButton from "@/src/UI/ui_components/VideoButton/VideoButton";
import { Reviews } from "@/src/UI/ui_components/ReviewsSlider/ReviewsSlider";
import { DiagnosticBanner } from "@/src/modules/HomeModules/DiagnosticBanner/DiagnosticBanner";
import { SertificateBanner } from "@/src/UI/ui_components/SertificateBanner/SertificateBanner";
import { Services } from "@/src/modules/HomeModules/Services/Services";
import { Form } from "@/src/modules/Forms/Form";

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

const Home = () => {
  return (
    <>
      <Banner />
      <VideoPlayButton />
      <Advantages
        title={"Bold Brands International "}
        subtitle={
          "совместно создаём прочную основу и уверенное будущее для вашей компании"
        }
        subtitleStyle={{ color: "#FF2B44" }}
        advantages={advantages}
      />
      <Challenges />
      {/* нужно сверстать */}
      <Services />
      <DiagnosticBanner />
      <SertificateBanner />
      <Partners />
      <Reviews />
      <Form/>
    </>
  );
};
export default Home;
