import React, { useState } from "react";
import PlayCards from "./Cards/PlayCards.jsx";
import ColouredCards from "./Cards/ColouredCards.jsx";

const OverlappingCards = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [hideCard, setHideCard] = useState(false);

  const handleClick = () => {
    setIsRevealed(true);
    setTimeout(() => setHideCard(true), 300);
    animation;
  };

  return (
    <div className="relative w-60 h-40">
      {/* TAla ko Card */}
      <div className="absolute top-0 left-0 z-0">
        <ColouredCards colour="red" />
      </div>

      {/* Mathi ko Card  */}
      {!hideCard && (
        <div
          className={`absolute top-0 left-0 z-10 cursor-pointer transition-opacity duration-300 ${
            isRevealed ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          onClick={handleClick}
        >
          <PlayCards name="Api" />
        </div>
      )}
    </div>
  );
};

export default OverlappingCards;
