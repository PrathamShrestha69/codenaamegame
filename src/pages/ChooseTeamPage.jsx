import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import TeamSelectionComponent from "../components/TeamSelectionComponent";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserIdFromLs } from "../utils/UserInfoLocalStorage";
import axios from "axios";

const changeTeamInDB = (userUniqueID, team, role) => {
  axios
    .post(`http://localhost:3000/users/changeuserteamandrole/${userUniqueID}`, {
      team,
      role,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

function ChooseTeamPage() {
  const navigator = useNavigate();
  const userTeam = useSelector((state) => state.team);
  const userRole = useSelector((state) => state.role);

  const handleStartBtn = () => {
    changeTeamInDB(getUserIdFromLs, userTeam, userRole);
    navigator("/main-game");
  };

  return (
    <div className="bg-[#79AEA3] h-full px-28 ">
      <NavBar />
      <div className="flex justify-between mt-12">
        <TeamSelectionComponent team="blue" />
        <div className="flex flex-col items-center justify-center ">
          {/* <div className="text-xl font-bold text-black bg-gray-100 px-3 rounded-2xl py-1 ">
            Setup a Game
          </div> */}
          <button
            className="btn btn-primary text-xl font-bold"
            onClick={handleStartBtn}
          >
            Start The Game
          </button>
        </div>
        <TeamSelectionComponent team="red" />
      </div>
    </div>
  );
}

export default ChooseTeamPage;
