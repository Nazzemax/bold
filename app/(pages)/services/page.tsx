import React from "react";
import { SecondBanner } from "@/widgets/secondBanner/SecondBanner";
import bgImg from "../../../public/services/bg-img.png";
import BusinessResults from "@/widgets/businessResults/BusinessResults";
import ApproachSection from "@/widgets/ApproachSection/ApproachSection";
import CarouselBlog from "@/features/services/components/CaruselBlog/caruselblog";
import { HowWeWork } from "@/widgets/HowWeWork/HowWeWork";
import Advantages from "@/widgets/advantages/Advantages";
import VideoTestimonials from "@/widgets/VideoTestimonials/VideoTestimonials";
import { FormSmmPromotion } from "@/widgets/Forms/FormSmmPromotion";

const advantages = [
  {
    title: "150+",
    subtitle: "Muvaffaqiyatli SMM kampaniyalari",
  },
  {
    title: "600%",
    subtitle: "Reklamadan olingan ROI: gacha",
  },
  {
    title: "+80%",
    subtitle: "Mijozlarning o‘rtacha ariza o‘sishi:",
  },
  {
    title: "1,5+",
    subtitle: "million organik kontent ko‘rishlar soni",
  },
];
type Props = {};

const ServicesPage: React.FC<Props> = ({}) => {
  return (
    <div>
      {/* Нужно исправить + адаптив*/}
      <SecondBanner
        bgImg={bgImg}
        title="Социальные сети, которые приносят поток клиентов"
        text="Соцсети станут вашим главным каналом продаж"
      />

      {/* Нужен адаптив */}
      <BusinessResults />

      {/* Нужны правки */}
      <ApproachSection />

      {/* Нужно жесткие правки, крч нужно заново переписать код*/}
      <CarouselBlog />

      {/* Нужны правки */}
      <HowWeWork />

      {/* Готово полностю */}
      <Advantages
        subtitle={"O‘z-o‘zidan so‘zlaydiganraqamlar"}
        subtitleStyle={{ color: "#AAADB5" }}
        advantageStyle={{ flexDirection: "column-reverse" }}
        advantages={advantages}
      />

      {/* Нужны правки */}
      <VideoTestimonials />

      {/*  */}
      <FormSmmPromotion />
    </div>
  );
};

export default ServicesPage;
