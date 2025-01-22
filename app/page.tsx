import Cases from "@/src/components/Cases/Cases";
import Contacts from "@/src/components/Contacts";
import { Content } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Contacts/>
      <Cases/>
    </div>
    
  );
}
