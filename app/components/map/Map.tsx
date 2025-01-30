"use client";

import { useEffect, useRef, useState } from "react";
import style from "./Map.module.scss";

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || isLoaded) return;

    const script = document.createElement("script");
    script.src = "https://maps.api.2gis.ru/2.0/loader.js?pkg=full";
    script.async = true;

    script.onload = () => {
      console.log("2GIS API загружен");
      setIsLoaded(true);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [isLoaded]);

  useEffect(() => {
    if (!isLoaded || !mapContainer.current) return;

    const checkDG = setInterval(() => {
      if ((window as any).DG) {
        clearInterval(checkDG);
        console.log("DG успешно инициализирован");

        const DG = (window as any).DG;
        const map = DG.map(mapContainer.current, {
          center: [42.8746, 74.5698], // Бишкек
          zoom: 13,
        });

        DG.marker([42.8746, 74.5698]).addTo(map).bindPopup("Бишкек");
      } else {
        console.log("Ожидание загрузки DG...");
      }
    }, 500);

    return () => clearInterval(checkDG);
  }, [isLoaded]);

  return <div className={style.mapContainer} ref={mapContainer}></div>;
};

export default Map;
