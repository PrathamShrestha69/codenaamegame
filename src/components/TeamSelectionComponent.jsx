import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeRole, changeTeam } from "../store/userDataSlice";

function TeamSelectionComponent({ team }) {
  const bgColor =
    team === "red"
      ? "bg-[#1E2F23]"
      : team === "blue"
      ? "bg-[#34623F]"
      : "bg-gray-200"; // default

  const [selected, setSelected] = useState(null);
  const displayName = useSelector((state) => state.displayName);
  const userTeam = useSelector((state) => state.team);
  const userRole = useSelector((state) => state.role);
  const disptach = useDispatch();

  const userInfoDiv = (
    <div className="text-gray-200 border-gray-200 border-2 inline-flex px-2 rounded-2xl">
      {" "}
      {displayName}{" "}
    </div>
  );

  const handleClick = (userChoice) => {
    team === "red" ? disptach(changeTeam("red")) : disptach(changeTeam("blue"));

    if (userChoice === "operative") {
      disptach(changeRole("operative"));
      setSelected("operative");
    } else {
      disptach(changeRole("spymaster"));
      setSelected("spymaster");
    }
  };

  useEffect(() => {
    console.log(userTeam, team);
  }, [userTeam, userRole]);

  return (
    <div
      className={`${bgColor} w-80 h-52 rounded-2xl shadow-lg p-6  justify-between`}
    >
      <div className="text-white text-xl font-semibold text-end">-</div>
      <div className="text-white opacity-80 ">Operative(s)</div>
      {selected === "operative" && userTeam === team ? (
        userInfoDiv
      ) : (
        <button
          onClick={(e) => handleClick("operative")}
          className="btn btn-primary "
        >
          Join as Operative
        </button>
      )}
      <div className="text-white opacity-80 ">Spymaster(s)</div>
      {selected === "spymaster" && userTeam === team ? (
        userInfoDiv
      ) : (
        <button
          onClick={(e) => handleClick("spymaster")}
          className="btn btn-primary "
        >
          Join as spymaster
        </button>
      )}
    </div>
  );
}

export default TeamSelectionComponent;
