import React from "react";
import PlayCards from "./PlayCards";

const ColouredCards = ({ colour }) => {
  const bgColor =
    colour === "red"
      ? "bg-[#1E2F23]"
      : colour === "blue"
      ? "bg-[#34623F]"
      : "bg-gray-200";

  return (
    <div className="relative w-36 h-24 group">
      {/* Base Coloured Card */}
      <div className={`w-36 h-24 rounded-lg shadow-inner p-2 ${bgColor}`}></div>

      {/* Hovered PlayCard */}
      <div className="absolute top-0 left-0 hidden group-hover:block">
        <PlayCards name="Api" />
      </div>
    </div>
  );
};

export default ColouredCards;
