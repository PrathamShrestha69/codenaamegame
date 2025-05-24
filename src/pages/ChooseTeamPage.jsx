import React from "react";
import NavBar from "../components/NavBar";
import TeamSelectionComponent from "../components/TeamSelectionComponent";
import OverlappingCards from "../components/OverlappedCards";

function ChooseTeamPage() {
  return (
    <div className="bg-[#79AEA3] h-full">
      <NavBar />

      <TeamSelectionComponent team="blue" />
      <OverlappingCards />
      <TeamSelectionComponent team="red" />
    </div>
  );
}

export default ChooseTeamPage;
