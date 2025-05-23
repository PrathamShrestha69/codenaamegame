import React from "react";
import NavBar from "../components/NavBar";
import TeamSelectionComponent from "../components/TeamSelectionComponent";

function ChooseTeamPage() {
  return (
    <div>
      <NavBar />

      <TeamSelectionComponent team="blue" />
      <TeamSelectionComponent team="red" />
    </div>
  );
}

export default ChooseTeamPage;
