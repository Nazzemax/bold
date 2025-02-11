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
import BrandingSection from "@/src/components/BrandingSection/BrandingSection";
import Advantages from "./components/layout/advantages/Advantages";
import Form from "./components/layout/form/Form";
import VideoButton from "@/src/components/VideoButton/VideoButton";
import DiagnosticBanner from "@/src/components/DiagnosticBanner/DiagnosticBanner";
import PartnershipBanner from "@/src/components/award/PartnershipBanner";
import MarketingSection from "@/src/components/MarketingSection/MarketingSection";
import BrandingCarousel from "@/src/components/BrandingCarousel/BrandingCarousel";
import Header from "./components/layout/header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      {/* блок 1 на странице брендинга (слайдер) */}
      <BrandingCarousel />
      {/* блок 1 на главной странице */}
      <MarketingSection />
      {/* блок 2 на главной странице (с крутящейся кнопкой) */}
      <VideoButton />
      {/* непонятно */}
      <Contacts />
      {/* блок 7 на галвной странице (слайдер о помощзи другим бизнесам) */}
      <Cases />
      {/* блок видео отзывов на страницах услуг */}
      <VideoTestimonials />
      {/* блок 10 на главной тсранице (слайдер отзывов клиентов) */}
      <ReviewsSlider />
      {/* блок 3 на старнице о нас (фреймы команды) */}
      <Team />
      {/* зигзаг-блок 1 на странице SMM */}
      <ApproachSection />
      {/* блок 1 на странице о нас */}
      <BusinessResults />
      {/* блок 2 на странице контекстной рекламы */}
      <HowWeWork />
      {/* блок частозадаваемых вопросов на странице SEO оптимизации */}
      <Seo />
      {/* блок 2 (слайдер продающегося контента) страница SMM */}
      <CarouselBlog />
      {/* зигзаг-блок 4 на странице CRM */}
      <CRMIntegration />
      {/* блок 9 на главной странице (слайдер партнёры) */}
      <Carousel />
      {/* зигзаг-блок 2 на странице брендинга */}
      <BrandingSection />
      {/* блок 3 на главной странице (кружки-часики) */}
      <Cases_Carusel backgroundImage={undefined} />
      {/* последний блок главной страницы (простая форма) */}
      <Form />
      {/* блок 6 на галвной странице (диагностика) */}
      <DiagnosticBanner />
      {/* блок 3 на странице CRM (официальные партнёры) */}
      <PartnershipBanner />
    </div>
  );
}
