import { ServiceProps } from "@/app/types/service"
import { Badge } from "../badge"
import Link from "next/link"
import Image from "next/image"


export const ServiceItem = ({ bg_image, title, href, badges }: ServiceProps) => {
    return (
        <div className="border max-w-[421px] mx-auto rounded-2xl shadow-lg">
            <Image
                src={bg_image}
                alt={title}
                width={421}
                height={220}
                className="rounded-2xl"
            />
            <div className="p-8">
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
                <Link href={href} className="flex justify-center p-2 gap-1 max-w-[150px] hover:bg-gray-100 transition duration-300 rounded-md">
                    <span className="text-[#FF2B44]">Подробнее</span>
                    <img src="/cases/redArrowRight.svg" />
                </Link>
            </div>

        </div>
    )
}
