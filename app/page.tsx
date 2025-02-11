



import Cases from "@/src/components/Cases/Cases";
import Contacts from "@/src/components/Contacts";
import ReviewsSlider from "@/src/components/ReviewsSlider/ReviewsSlider";
import VideoTestimonials from "@/src/components/VideoTestimonials/VideoTestimonials";
import Team from "@/src/components/Team/TeamSection"

import { Content } from "next/font/google";
import Image from "next/image";
import ApproachSection from "@/src/components/ApproachSection/ApproachSection";
import BusinessResults from "@/src/components/BusinessResults/BusinessResults";
import { HowWeWork } from "@/src/components/HowWeWork/HowWeWork";
import Seo from "@/src/components/Seo/seo";
import CarouselBlog from '@/src/components/CaruselBlog/caruselblog'
import CRMIntegration from "@/src/components/CRMIntegration/CRMIntegration";
import Carousel from "@/src/components/Carousel/Carousel";
import Cases_Carusel from "@/src/components/BoldBrands/BoldBrands";

import Advantages from "./components/layout/advantages/Advantages";
import Form from "./components/layout/form/Form";
import VideoButton from "@/src/components/VideoButton/VideoButton";
import DiagnosticBanner from "@/src/components/DiagnosticBanner/DiagnosticBanner";
import PartnershipBanner from "@/src/components/award/PartnershipBanner";
import MarketingSection from "@/src/components/MarketingSection/MarketingSection";
import BrandingCarousel from "@/src/components/BrandingCarousel/BrandingCarousel";
import Header from "./components/layout/header/Header";
import VideoProduction from "@/src/components/VideoProduction/VideoProduction";



export default function Home() {
  return (
    <div>
      {/* <Header bgColor="black"/>
      <BrandingCarousel/>
      <MarketingSection/>
      <VideoButton/>
      <Contacts/>
      <Cases/>
      <VideoTestimonials/>
      
      <ReviewsSlider/>
      <Team/>
      <ApproachSection/> */}
      {/* <BusinessResults/>
      <HowWeWork/>
      <Seo/>
      <CarouselBlog/>
      {/* <CRMIntegration/> */}
      {/* <Carousel /> */} */}
     
      <VideoProduction/>
      
      {/* <Cases_Carusel backgroundImage={undefined}/>
      <Form/>
      <DiagnosticBanner/>
      <PartnershipBanner/> */}
      
    </div>
  )

}


