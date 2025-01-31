

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
import BrandingSection from "@/src/components/BrandingSection/BrandingSection";
import Header from "./components/layout/header/Header";
import Swiper from "./components/ui/swiper";
import { CaseCard } from "./components/ui/swiper/case-card";
import { ICaseCard } from "./components/ui/swiper/type";



export default function Home() {
  return (
    <div>
      <Header bgColor="black"/>
      <BusinessResults/>
      <Cases_Carusel backgroundImage={undefined}/>
      <Team/>
      <Carousel />
      <ReviewsSlider/>
      <CaseCard img={""} title={""} company={""} date={""} instagramFollowers={0} tiktokViews={0}/>
      {/* <Contacts/>
      <Cases/>
      <VideoTestimonials/>
      
      <ReviewsSlider/>
      
      <ApproachSection/>
      
      <HowWeWork/>
      <Seo/>
      <CarouselBlog/>
      {/* <CRMIntegration/> */}
      {/* <Carousel />
      <BrandingSection/> */}
       
    </div>
    

  );
}
