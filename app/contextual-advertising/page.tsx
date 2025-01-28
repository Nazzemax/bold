import Header from "@/app/components/layout/header/Header";
import React from "react";
import Banner from "../components/Banner/Banner";
import bannerImage from "@/public/context-ad/banner.png";
type Props = {};

export default function index({}: Props) {
  return (
    <div>
      <Header bgColor="transparent"/>
      <Banner
        title="Не упустите клиентов, готовых купить прямо сейчас!"
        subtitle="Настраиваем рекламу, которая приносит заявки с первого дня запуска"
        button="Оставить заявку"
        image={bannerImage.src}/>
    </div>
  );
}
