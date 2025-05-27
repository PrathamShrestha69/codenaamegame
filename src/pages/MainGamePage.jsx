import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import TeamSelectionComponent from "../components/TeamSelectionComponent";
import OverlappingCards from "../components/OverlappedCards";
import ClueSpyMaster from "../components/ClueSpyMaster";

function MainGamePage() {
  const [cards, setCards] = useState([]);
  const [submittedClue, setSubmittedClue] = useState("");
  const [submittedNumber, setSubmittedNumber] = useState("");

  useEffect(() => {
    const noOfRows = 5;
    const noOfCols = 5;
    const generatedCards = [];

    for (let i = 1; i <= noOfRows; i++) {
      for (let j = 1; j <= noOfCols; j++) {
        generatedCards.push(<OverlappingCards />);
      }
    }
    setCards(generatedCards);
  }, []);

  const handleClueSubmit = (clue, number) => {
    setSubmittedClue(clue);
    setSubmittedNumber(number);

    // Optional: clear after 5 seconds
    setTimeout(() => {
      setSubmittedClue("");
      setSubmittedNumber("");
    }, 5000);
  };

  return (
    <div className="bg-[#79AEA3] px-28">
      <NavBar />
      <div className="flex justify-between gap-x-4 gap-y-0">
        <TeamSelectionComponent team="blue" />
        <div className="flex flex-col justify-center items-center gap-x-4 ">
          <div className="grid grid-cols-5 grid-rows-5 gap-y-0">
            {cards.map((card, index) => (
              <div key={index}>{card}</div>
            ))}
          </div>

          {/* Show clue below the board */}
          {submittedClue && (
            <div className="bg-green-100 p-4 rounded-xl text-black shadow-inner text-center gap-y-0">
              <p>
                <strong>Clue:</strong> {submittedClue}
              </p>
              <p>
                <strong>Number:</strong> {submittedNumber}
              </p>
            </div>
          )}

          <ClueSpyMaster onClueSubmit={handleClueSubmit} />
        </div>
        <TeamSelectionComponent team="red" />
      </div>
    </div>
  );
}

export default MainGamePage;
