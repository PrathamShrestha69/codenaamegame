import React from "react";
import PlayCards from "./Cards/PlayCards";

function TeamSelectionComponent({ team }) {
  const bgColor =
    team === "red"
      ? "bg-[#1E2F23]"
      : team === "blue"
      ? "bg-[#34623F]"
      : "bg-gray-200"; // default

  return (
    <div
      className={`${bgColor} w-80 h-52 rounded-2xl shadow-lg p-6  justify-between`}
    >
      <div className="text-white text-xl font-semibold text-end">-</div>
      <div className="text-white opacity-80 ">Operative(s)</div>
      <button className="btn btn-primary ">Join as Operative</button>
      <div className="text-white opacity-80 ">Spymaster(s)</div>
      <button className="btn btn-primary">Join as Spymaster</button>
    </div>
  );
}

export default TeamSelectionComponent;
