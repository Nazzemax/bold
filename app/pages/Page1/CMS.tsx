
import Cases from "@/src/components/Cases/Cases";
import Contacts from "@/src/components/Contacts";
import ReviewsSlider from "@/src/components/ReviewsSlider/ReviewsSlider";
import VideoTestimonials from "@/src/components/VideoTestimonials/VideoTestimonials";
import Team from "@/src/components/Team/TeamSection";
import { Content } from "next/font/google";
import Image from "next/image";
import ApproachSection from "@/src/components/ApproachSection/ApproachSection";
import BusinessResults from "@/src/components/BusinessResults/BusinessResults";
import { HowWeWork } from "@/src/components/HowWeWork/HowWeWork";
import Seo from "@/src/components/Seo/seo";
import CarouselBlog from "@/src/components/CaruselBlog/caruselblog";
import CRMIntegration from "@/src/components/CRMIntegration/CRMIntegration";
import Carousel from "@/src/components/Carousel/Carousel";
import Cases_Carusel from "@/src/components/BoldBrands/BoldBrands";

import Advantages from "../../components/layout/advantages/Advantages";
import Form from "../../components/layout/form/Form";
import VideoButton from "@/src/components/VideoButton/VideoButton";
import DiagnosticBanner from "@/src/components/DiagnosticBanner/DiagnosticBanner";
import PartnershipBanner from "@/src/components/award/PartnershipBanner";
import MarketingSection from "@/src/components/MarketingSection/MarketingSection";
import BrandingCarousel from "@/src/components/BrandingCarousel/BrandingCarousel";
// import Header from "./components/layout/header/Header";
import VideoProduction from "@/src/components/VideoProduction/VideoProduction";
import ServiceSection from "@/src/UI/ServiceSection/ServiceSection";
import { servicesData1 } from "@/src/data/servicesData";
import ServiceSection2 from "@/src/UI/ServiseSection2/ServiseSection2";
import { servicesData2 } from "@/src/data/servicesData2";
import ServiceSection3 from "@/src/UI/ServiceSection3/ServiceSection3";
import { servicesData3 } from "@/src/data/servicesData3";
import StepCard from "@/src/UI/StepCard/StepCard";
import { crmBenefits, crmBenefits2, howWeWorkSteps } from "@/src/data/stepsData";
import ExamplePage, { ExamplePage1, ExamplePage2 } from "@/src/UI/ExamplePage/ExamplePage";
import Results from "@/src/components/Results/Results";

export default function CMS() {
  return (
    <div>
    <ExamplePage2 />
      <ServiceSection {...servicesData1} />;
      <StepCard title="Почему выбирают Bold Brands?" steps={crmBenefits2} buttonText="Получить консультацию"  />
      <Results/>
      <Form/>
      
      
    </div>

  );
}
