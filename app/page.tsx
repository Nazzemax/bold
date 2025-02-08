import Header from "./components/layout/header/Header";
import DesignSupport from "@/app/components/businessOffer/BusinessOffers";
import brain from '@/public/brain.svg'
import handshake from '@/public/handshake.jpg'

export default function Home() {
  return (
   <>
    <Header bgColor="black"/>
    <DesignSupport
    title="Результаты, которые работают на ваш бизнес"
    rightText="Мы понимаем, что для предпринимателей важны не просто идеи, а измеримые результаты - рост заявок, привлечение клиентов и увеличение прибыли."
    leftTitle="Наша философия"
    leftText="Работать для вашего успеха, предлагая стратегии, которые решают именно ваши бизнес-задачи и обеспечивают конкретные достижения."
    icon={brain}
    image={handshake}
    rightTextDown
    leftTextDown
   />
   </>
  );
}
