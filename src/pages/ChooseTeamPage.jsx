import React from "react";
import NavBar from "../components/NavBar";
import TeamSelectionComponent from "../components/TeamSelectionComponent";

function ChooseTeamPage() {
  return (
    <div className="bg-[#79AEA3] h-full">
      <NavBar />

      <TeamSelectionComponent team="blue" />
      <TeamSelectionComponent team="red" />
    </div>
  );
}

export default ChooseTeamPage;
