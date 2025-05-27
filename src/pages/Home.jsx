import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeDisplayName } from "../store/userDataSlice.js";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import {
  setUserIdInLs,
  getUserIdFromLs,
} from "../utils/UserInfoLocalStorage.js";

const sendUserInfoToDB = (displayName, userUniqueID) => {
  axios
    .post("http://localhost:3000/users/registernew", {
      displayName,
      userUniqueID,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

function Home() {
  const navigator = useNavigate();
  const [displayNameInput, setDisplayNameInput] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    //redux
    if (displayNameInput === "" || displayNameInput === " ") {
      return;
    }
    dispatch(changeDisplayName(displayNameInput));

    //DB
    const userUniqueID = uuidv4();
    sendUserInfoToDB(displayNameInput, userUniqueID);
    setUserIdInLs(userUniqueID);

    navigator("/choose-team");
  };

  useEffect(() => {
    const userInfoInLs = getUserIdFromLs();
  }, []);

  return (
    <div className="bg-[#79AEA3]  h-screen w-screen flex flex-col items-center justify-center">
      <div className="bg-[#34623F] shadow-lg shadow-[#34623F] rounded-2xl 50 flex flex-col items-center p-6">
        <div className="text-xl font-bold px-3 py-2 text-white">Play Games</div>

        {/* form */}
        <div className="">
          <div className="text-start font-bold">
            To Enter The Game,Choose Your Nickname:
          </div>

          <input
            type="text"
            name="username"
            className="bg-white rounded-2xl mt-2 px-6 py-2 w-80 text-black placeholder-gray-400 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
            placeholder="Username"
            value={displayNameInput}
            onChange={(e) => setDisplayNameInput(e.target.value)}
          />
        </div>

        <button className="btn btn-primary mt-4 " onClick={handleClick}>
          Play Game
        </button>
      </div>
    </div>
  );
}

export default Home;
