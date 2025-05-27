import React, { useState } from "react";

const ClueSpyMaster = ({ onClueSubmit }) => {
  const [clue, setClue] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = () => {
    onClueSubmit(clue, number); // Send to parent
    setClue("");
    setNumber("");
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-row gap-x-2">
        <input
          type="text"
          placeholder="TYPE YOUR CLUE HERE"
          value={clue}
          onChange={(e) => setClue(e.target.value)}
          className="bg-white rounded-2xl px-6 py-2 w-80 text-black placeholder-gray-400 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
        />

        <select
          className="w-12 h-12 bg-white rounded-xl shadow-md text-lg font-bold border text-black border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-green-400 transition appearance-none"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
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

        <button
          onClick={handleSubmit}
          className="bg-lime-500 text-white font-bold rounded-xl px-4 py-2 shadow-md hover:bg-lime-600"
        >
          Give Clue
        </button>
      </div>
    </div>
  );
};

export default ClueSpyMaster;
