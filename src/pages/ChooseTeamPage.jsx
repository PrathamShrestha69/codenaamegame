import React from "react";
import NavBar from "../components/NavBar";
import TeamSelectionComponent from "../components/TeamSelectionComponent";
import PlayCards from "../components/PlayCards";

function ChooseTeamPage() {
  return (
    <div className="bg-[#79AEA3] h-full">
      <NavBar />

      <TeamSelectionComponent team="blue" />
      <PlayCards />
      <TeamSelectionComponent team="red" />
    </div>
  );
}

export default ChooseTeamPage;
