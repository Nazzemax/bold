"use client";

import React, { useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  OverlayView,
  useLoadScript,
} from "@react-google-maps/api";
import MapButton from "../../ui/map/MapButton";
import "../../ui/map/MapButton.scss";

const mapContainerStyle: React.CSSProperties = {
  width: "95%",
  height: "70vh",
  borderRadius: "32px",
  margin: "3vh",
};

const centerBishkek: { lat: number; lng: number } = {
  lat: 42.846191,
  lng: 74.6182,
}; // Координаты для Бишкека
const centerTashkent: { lat: number; lng: number } = {
  lat: 41.310758,
  lng: 69.310728,
}; // Координаты для Ташкента

const infoWindowBishkek: { lat: number; lng: number } = {
  lat: 42.847085,
  lng: 74.618839,
}; // Координаты для окна адреса в Бишкеке

const infoWindowTashkent: { lat: number; lng: number } = {
  lat: 41.311576,
  lng: 69.311335,
}; // Координаты для окна адреса в Ташкенте

//стиль карты
const mapOptions: google.maps.MapOptions = {
  styles: [
    {
      featureType: "all",
      elementType: "geometry",
      stylers: [{ saturation: -100 }, { lightness: -10 }],
    },
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [{ color: "#313336" }],
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [{ visibility: "on" }],
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [{ visibility: "on" }],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#131313" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#64686E" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#64686E" }],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#52555A" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#313336" }],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#64686E" }],
    },
    {
      featureType: "poi",
      elementType: "labels.icon", // Для изменения иконок меток
      stylers: [{ color: "#434343" }],
    },
    {
      featureType: "poi.business",
      elementType: "geometry",
      stylers: [{ visibility: "on" }, { color: "#1e1e1e" }],
    },
  ],
  mapTypeControl: false,
  fullscreenControl: false,
  streetViewControl: false,
  zoomControl: false,
  backgroundColor: "#000000",
};

const MapSwitch: React.FC = () => {
  const [mapCondition, setMapCondition] = useState<boolean>(true);
  const center: { lat: number; lng: number } = mapCondition
    ? centerBishkek
    : centerTashkent;

  const centerInfoWindow: { lat: number; lng: number } = mapCondition
    ? infoWindowBishkek
    : infoWindowTashkent;

  const { isLoaded, loadError }: { isLoaded: boolean; loadError?: Error } =
    useLoadScript({
      googleMapsApiKey: "AIzaSyCtrTvA1wlB3E3bjqGqPKte_pSN6aVaIoE" as string,
    });

  if (loadError) return <p>Ошибка загрузки карты</p>;
  if (!isLoaded) return <p>Загрузка карты</p>;

  return (
    <div className="relative w-full flex flex-col items-center justify-center bg-[#0D0D0D]">
      {/* Блок с кнопками switch */}
      <div className="flex gap-2 bg-transparent map-buttons-container">
        <MapButton
          text="Бишкек"
          isActive={mapCondition}
          onClick={() => setMapCondition(true)}
        />
        <MapButton
          text="Ташкент"
          isActive={!mapCondition}
          onClick={() => setMapCondition(false)}
        />
      </div>
      {loadError && <p className="text-red-500">Ошибка загрузки карты</p>}
      {!isLoaded ? (
        <p>Загрузка карты</p>
      ) : (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={16}
          center={center}
          options={mapOptions}
        >
          <Marker
            position={center}
            icon={{
              url: "/map/mapMarker.svg",
              scaledSize: new window.google.maps.Size(50, 50), //место для кастомной иконки
            }}
          />

          <OverlayView
            position={centerInfoWindow}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "7px",
                borderRadius: "5px",
                width: "6rem",
                height: "3rem",
              }}
            >
              {mapCondition ? (
                <p style={{ fontWeight: "700" }}>ул. Матросова, дом 102</p>
              ) : (
                <p style={{ fontWeight: "700" }}>Яшнободский район, Янгибозор 1</p>
              )}
            </div>
          </OverlayView>
        </GoogleMap>
      )}
    </div>
  );
};

export default MapSwitch;
