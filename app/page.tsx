
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



export default function Home() {
  return (
    <div>
      <Contacts/>
      <Cases/>
      <VideoTestimonials/>
      
      <ReviewsSlider/>
      <Team/>
      <ApproachSection/>
      <BusinessResults/>
      <HowWeWork/>
      <Seo/>
      <CarouselBlog/>
      {/* <CRMIntegration/> */}
      <Carousel />
      <BrandingSection/>
      <Cases_Carusel backgroundImage={undefined}/>
    </div>
    
  );
}
