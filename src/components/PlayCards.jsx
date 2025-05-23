import React from "react";

const PlayCards = ({ name = "pratham" }) => {
  return (
    <div className="w-44 h-28 bg-[#f8e1c4] rounded-lg shadow-inner p-2 relative">
      {/* card ko dharka */}
      <div className=" border-[3px] border-[#c89c74] rounded-lg h-24 w-40">
        {/* smoll card */}
        <div className="absolute top-4 right-4 w-8 h-10 bg-[#d8bfa3] rounded-sm" />
        {/* line */}
        <div className="w-28 h-[1px] bg-[#c89c74] mt-4 mb-4" />
        {/* print name */}
        <div className="bg-white border-[2px] border-[#c89c74] rounded-sm px-2 py-1 mt-6 flex justify-center items-center ">
          <span className="font-bold text-black text-sm">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayCards;
