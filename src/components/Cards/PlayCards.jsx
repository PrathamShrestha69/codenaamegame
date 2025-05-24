import React from "react";

const PlayCards = ({ name = "database" }) => {
  return (
    <div className="w-36 h-24 bg-[#f8e1c4] rounded-lg shadow-inner p-2 relative">
      <div className="border-[3px] border-[#c89c74] rounded-lg h-20 w-32 flex flex-col items-center justify-center relative">
        <div className="absolute top-2 right-2 w-8 h-8 bg-[#d8bfa3] rounded-sm" />
        <div className="flex flex-col items-center gap-2 mt-10">
          <div className="w-24 h-[1px] bg-[#c89c74]" />
          <div className="bg-white border-[2px] border-[#c89c74] rounded-sm px-2 w-24 flex justify-center items-center">
            <span className="font-bold text-black text-sm">{name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayCards;
