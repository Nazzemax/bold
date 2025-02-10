"use client";
import { useEffect, useState } from "react";
import styles from "./Map.module.scss";

const Map = () => {
  const [city, setCity] = useState<"bishkek" | "tashkent">("bishkek");
  const [map, setMap] = useState<any>(null);
  const [placemark, setPlacemark] = useState<any>(null);

  const locations = {
    bishkek: { coords: [42.8746, 74.5698], address: "улица Матросова, 102" },
    tashkent: { coords: [41.2995, 69.2401], address: "улица Амира Темура, 5" },
  };
  // const darkTheme = [
  //   {
  //     featureType: "all",
  //     stylers: [
  //       { hue: "#ff1a00" },
  //       { invert_lightness: true },
  //       { saturation: -100 },
  //       { lightness: 33 },
  //       { gamma: 0.5 },
  //     ],
  //   },
  //   {
  //     featureType: "water",
  //     stylers: [{ color: "#222222" }],
  //   },
  // ];
  useEffect(() => {
    const loadMap = () => {
      const script = document.createElement("script");
      script.src =
        "https://api-maps.yandex.ru/2.1/?apikey=c2338cb3-55e9-4bf6-9036-50f552414d9c&lang=ru_RU";
      script.async = true;
      script.onload = () => {
        if (window.ymaps) {
          window.ymaps.ready(() => {
            const newMap = new window.ymaps.Map("map", {
              center: locations[city].coords,
              zoom: 15,
              controls: ["zoomControl", "fullscreenControl"],
            });

            newMap.options.set("yandexMapDisablePoiInteractivity", "true");
            newMap.options.set("background", "#1E1E1E");
            const groundPane = newMap.panes.get("ground");
            if (groundPane && groundPane.getElement()) {
              groundPane.getElement().style.filter = "invert(1)";
            }

            const newPlacemark = new window.ymaps.Placemark(
              locations[city].coords,
              { balloonContent: locations[city].address },
              { preset: "islands#nightCircleIcon" }
            );

            newMap.geoObjects.add(newPlacemark);
            setMap(newMap);
            setPlacemark(newPlacemark);
          });
        }
      };

      document.body.appendChild(script);
    };

    if (!window.ymaps) {
      loadMap();
    } else {
      window.ymaps.ready(() => {
        const newMap = new window.ymaps.Map("map", {
          center: locations[city].coords,
          zoom: 15,
          controls: ["zoomControl", "fullscreenControl"],
        });

        newMap.options.set("yandexMapDisablePoiInteractivity", "true");
        newMap.options.set("background", "#1E1E1E");
        const groundPane = newMap.panes.get("ground");
        if (groundPane && groundPane.getElement()) {
          groundPane.getElement().style.filter = "invert(1)";
        }

        const newPlacemark = new window.ymaps.Placemark(
          locations[city].coords,
          { balloonContent: locations[city].address },
          { preset: "islands#nightCircleIcon" }
        );

        newMap.geoObjects.add(newPlacemark);
        setMap(newMap);
        setPlacemark(newPlacemark);
      });
    }
  }, []);

  useEffect(() => {
    if (map && placemark) {
      map.setCenter(locations[city].coords, 15);
      placemark.geometry.setCoordinates(locations[city].coords);
      placemark.properties.set("balloonContent", locations[city].address);
    }
  }, [city]);

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button
          className={city === "bishkek" ? styles.active : ""}
          onClick={() => setCity("bishkek")}
        >
          Бишкек
        </button>
        <button
          className={city === "tashkent" ? styles.active : ""}
          onClick={() => setCity("tashkent")}
        >
          Ташкент
        </button>
      </div>
      <div id="map" className={styles.map}></div>
    </div>
  );
};

export default Map;
