import React from "react";

function TeamSelectionComponent({ team }) {
  const bgColor =
    team === "red"
      ? "bg-[#1E2F23]"
      : team === "blue"
      ? "bg-[#70EE9C]"
      : "bg-gray-200"; // default

  return (
    <div
      className={`${bgColor} w-80 h-52 rounded-2xl shadow-lg p-6 flex flex-col justify-between`}
    >
      <div className="text-white text-xl font-semibold text-end">-</div>
      <div className="text-white opacity-80 ">Operative(s)</div>
      <div className="text-white opacity-80 ">Spymaster(s)</div>
    </div>
  );
}

export default TeamSelectionComponent;
