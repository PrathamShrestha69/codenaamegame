import React from "react";

const ClueSpyMaster = () => {
  return (
    <div>
      <div className="flex flex-row gap-x-2">
        {/* Clue */}
        <input
          type="text"
          placeholder="TYPE YOUR CLUE HERE"
          className="bg-white rounded-2xl px-6 py-2 w-80 text-black placeholder-gray-400 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
        />
        {/* Number */}
        <select
          className="w-12 h-12 bg-white rounded-xl shadow-md text-lg font-bold border text-black border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-green-400 transition appearance-none"
          defaultValue=""
        >
          <option value="" disabled>
            -
          </option>
          {[...Array(10).keys()].map((n) => (
            <option key={n + 1} value={n + 1}>
              {n + 1}
            </option>
          ))}
          <option value="∞">∞</option>
        </select>
        {/* Onclick lagauna baki xa */}
        <button className="bg-lime-500 text-white font-bold rounded-xl px-4 py-2 shadow-md hover:bg-lime-600">
          Give Clue
        </button>
      </div>
    </div>
  );
};

export default ClueSpyMaster;
