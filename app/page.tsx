import Cases from "@/src/components/Cases/Cases";
import Contacts from "@/src/components/Contacts";
import VideoTestimonials from "@/src/components/VideoTestimonials/VideoTestimonials";
import { Content } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Contacts/>
      <Cases/>
      <VideoTestimonials/>
    </div>
    
  );
}
