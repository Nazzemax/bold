import { ServiceProps } from "../types/ServiceProps";
import { Badge } from "../Badge/Badge";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export const ServiceItem = ({
  bg_image,
  title,
  href,
  badges,
}: ServiceProps) => {
  return (
    <div className="border max-w-[421px] min-h-[525px] mx-auto rounded-2xl shadow-lg flex flex-col">
      <Image
        src={bg_image}
        alt={title}
        width={421}
        height={220}
        className="rounded-2xl"
      />
      <div className="p-8 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex items-center my-4 flex-wrap gap-2">
          {badges.map((badge) => (
            <Badge
              key={badge}
              className="bg-white border text-gray-400 py-1 text-sm"
            >
              {badge}
            </Badge>
          ))}
        </div>
        <div className="mt-auto pt-6">
          <Link
            href={href}
            className="flex justify-center items-center rounded-xl p-2 gap-1 max-w-[150px] hover:bg-gray-100 transition duration-300 "
          >
            <span className="text-[#FF2B44]">Подробнее</span>
            <ChevronRight size={16} color="#ff2b44" />
          </Link>
        </div>
      </div>
    </div>
  );
};
