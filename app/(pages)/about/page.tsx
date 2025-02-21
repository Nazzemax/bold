import { SecondBanner } from "@/widgets/secondBanner/SecondBanner";
import bgImg from "../../../public/cases/aboutUsCaseBg.jpg";
import BusinessResults from "@/widgets/businessResults/BusinessResults";
import Advantages from "@/widgets/advantages/Advantages";
import Partners from "@/widgets/partners/Partners";
import { TeamSection } from "@/features/about/ui/Team/TeamSection";
import { Form } from "@/widgets/Forms/Form";

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
type Props = {};

const AboutPage: React.FC<Props> = ({}) => {
  return (
    <div>
      <SecondBanner
        bgImg={bgImg}
        title="Мы меняем представление о маркетинге в Центральной Азии"
      />
      <BusinessResults />
      <Advantages
        title={"Bold Brands International "}
        subtitle={
          "совместно создаём прочную основу и уверенное будущее для вашей компании"
        }
        subtitleStyle={{ color: "#FF2B44" }}
        advantages={advantages}
      />
      <TeamSection />

      <Partners />
      <Form />
    </div>
  );
};

export default AboutPage;
