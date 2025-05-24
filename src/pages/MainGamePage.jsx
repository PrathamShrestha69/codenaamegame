import React, { useEffect, useState } from "react";
import PlayCards from "../components/Cards/PlayCards";
import NavBar from "../components/NavBar";
import TeamSelectionComponent from "../components/TeamSelectionComponent";
import OverlappingCards from "../components/OverlappedCards";

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
    <div className="bg-[#79AEA3] h-full px-28 ">
      <NavBar />

      <div className="flex justify-between mt-12">
        <TeamSelectionComponent team="blue" />
        <div className="flex flex-wrap gap-2 items-center justify-center ">
          {cards.map((card) => card)}
        </div>
        <TeamSelectionComponent team="red" />
      </div>
    </div>
  );
}

export default MainGamePage;
