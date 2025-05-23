import React from "react";

const PlayCards = ({ name = "pratham" }) => {
  return (
    <div className="w-44 h-28 bg-[#f8e1c4] rounded-lg shadow-inner p-2 relative">
      <div className="border-[3px] border-[#c89c74] rounded-lg h-24 w-40 flex flex-col items-center justify-center relative">
        <div className="absolute top-2 right-2 w-8 h-10 bg-[#d8bfa3] rounded-sm" />
        <div className="flex flex-col items-center gap-2 mt-10">
          <div className="w-28 h-[1px] bg-[#c89c74]" />
          <div className="bg-white border-[2px] border-[#c89c74] rounded-sm px-2 py-1 w-32 flex justify-center items-center">
            <span className="font-bold text-black text-sm">{name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayCards;
