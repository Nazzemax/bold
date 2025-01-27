
import Cases from "@/src/components/Cases/Cases";
import Contacts from "@/src/components/Contacts";
import ReviewsSlider from "@/src/components/ReviewsSlider/ReviewsSlider";
import VideoTestimonials from "@/src/components/VideoTestimonials/VideoTestimonials";
import Team from "@/src/components/Team/TeamSection"

import { Content } from "next/font/google";
import Image from "next/image";
import ApproachSection from "@/src/UI/ApproachSection/ApproachSection";
import BusinessResults from "@/src/components/BusinessResults/BusinessResults";
import { HowWeWork } from "@/src/components/HowWeWork/HowWeWork";
import Seo from "@/src/components/Seo/seo";
import CarouselBlog from '@/src/components/CaruselBlog/caruselblog'
import CRMIntegration from "@/src/components/CRMIntegration/CRMIntegration";



export default function Home() {
  return (
    <div>
      <Contacts/>
      <Cases/>
      <VideoTestimonials/>
      {/* <Carousel partners={[]}/> */}
      <ReviewsSlider/>
      <Team/>
      <ApproachSection/>
      <BusinessResults/>
      <HowWeWork/>
      <Seo/>
      <CarouselBlog/>
      {/* <CRMIntegration/> */}
    </div>
    
  );
}
