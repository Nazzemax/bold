import React from "react";
import "../map/MapButton.scss"

interface MapButtonProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const MapButton: React.FC<MapButtonProps> = ({ text, isActive, onClick }) => {
  return (
    <button
      className={`map-button-text px-4 py-2 border border-none rounded-2xl text-sm pt-3 pb-3 transition-all duration-300 ${
        isActive ? "bg-white text-black" : "bg-[#313336] text-[#AAADB5]"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MapButton;
