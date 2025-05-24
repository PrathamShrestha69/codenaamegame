import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import TeamSelectionComponent from "../components/TeamSelectionComponent";
import OverlappingCards from "../components/OverlappedCards";
import ClueSpyMaster from "../components/ClueSpyMaster";

function MainGamePage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const noOfRows = 5;
    const noOfCols = 5;
    const generatedCards = [];

    for (let i = 1; i <= noOfRows; i++) {
      console.log(i);
      for (let j = 1; j <= noOfCols; j++) {
        generatedCards.push(<OverlappingCards />);
      }
    }
    console.log(generatedCards);
    setCards(generatedCards);
  }, []);

  return (
    <div className="bg-[#79AEA3]  px-28 ">
      <NavBar />

      <div className="flex justify-between gap-x-4 gap-y-0 ">
        <TeamSelectionComponent team="blue" />
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-5 grid-rows-5 gap-x-2 gap-y-0 ">
            {cards.map((card, index) => (
              <div key={index}>{card}</div>
            ))}
          </div>
          <div className="gap-y-3">
            <ClueSpyMaster />
          </div>
        </div>
        <TeamSelectionComponent team="red" />
      </div>
    </div>
  );
}

export default MainGamePage;
