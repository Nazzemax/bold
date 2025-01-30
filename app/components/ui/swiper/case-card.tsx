"use client";

import Image from "next/image";
import { ICaseCard } from "./type";
import { Badge } from "../badge";
import formatNumber from "@/app/lib/formatNumber";

export const CaseCard = ({
  img,
  title,
  company,
  date,
  tiktokViews,
  instagramFollowers
}: ICaseCard) => {
  return (
    <div className="w-full max-w-[450px] md:max-w-[500px] lg:max-w-[535px]">
      <div className="relative overflow-hidden rounded-3xl">
        <Image
          src={img}
          alt={'case image'}
          width={535}
          height={320}
          className="rounded-2xl w-full h-auto object-cover"
        />
        <div className="absolute top-7 left-6 flex gap-2 flex-wrap">
          <Badge icon="/cases/smm.svg">SMM</Badge>
          <Badge icon="/cases/target.svg">Таргет</Badge>
          <Badge icon="/cases/marketing.svg">Маркетинг</Badge>
        </div>
      </div>
      <div className="flex justify-between items-center mt-3 flex-wrap gap-1">
        <Badge className="bg-white border text-gray-400 py-1 text-sm" icon="/cases/social/instagram.svg">
          +{formatNumber(instagramFollowers)} подписчиков в Instagram
        </Badge>
        <Badge className="bg-white border text-gray-400 py-1 text-sm" icon="/cases/social/tiktok.svg">
          {formatNumber(tiktokViews)} просмотров в TikTok
        </Badge>
      </div>
      <div className="mt-3">
        <h3 className="text-2xl md:text-3xl font-bold line-clamp-2">{title}</h3>
        <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm md:text-base">
          <span>{company}</span>
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};
