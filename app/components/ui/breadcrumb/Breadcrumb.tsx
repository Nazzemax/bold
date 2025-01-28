'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import arrowLeft from '@/public/cases/arrowLeft.png'

// Define the route-to-name mapping
const routeMap: Record<string, string> = {
  "/": "Главная",
  "/cases": "Кейсы",
  "/about":"О нас",
//   "":"",
//   "":"",
//   "":""
};

const Breadcrumb: React.FC = () => {
  const pathname = usePathname()

  // Split the current route path into segments
  const paths = pathname.split("/").filter(Boolean);

  // Build the breadcrumb dynamically
  const breadcrumbItems = paths.map((path, index) => {
    const fullPath = "/" + paths.slice(0, index + 1).join("/");
    return { name: routeMap[fullPath] || decodeURIComponent(path), href: fullPath };
  });

  return (
    <nav className="flex text-white text-lg">
      <Link href="/" className="hover:underline text-white">
        Главная
      </Link>
      {breadcrumbItems.map((item, index) => (
        <span key={item.href} className="flex items-center">
          <span className="mx-[21.6px]">{<Image src={arrowLeft} alt="left arrow icon" />}</span>
          {index === breadcrumbItems.length - 1 ? (
            <span className="text-white">{item.name}</span>
          ) : (
            <Link href={item.href} className="hover:underline text-white">
              {item.name}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
