import React from "react";

const ColouredCards = ({ colour }) => {
  const bgColor =
    colour === "red"
      ? "bg-[#1E2F23]"
      : colour === "blue"
      ? "bg-[#34623F]"
      : "bg-gray-200";

  return (
    <div
      className={`w-44 h-28 rounded-lg shadow-inner p-2 relative ${bgColor}`}
    >
      {/* Optional content inside card */}
    </div>
  );
};

export default ColouredCards;
