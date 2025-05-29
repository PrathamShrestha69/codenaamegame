import React from "react";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function RoomCodeInput({ initialRoomCode = "" }) {
  const roomInputRef = useRef(null);
  const [changedRoomInput, setChangedRoomInput] = useState(false);
  const navigator = useNavigate();

  console.log(initialRoomCode);

  const handleCopy = () => {
    const input = roomInputRef.current;

    input.select();
    input.setSelectionRange(0, input.value.length);
    navigator.clipboard
      .writeText(input.value)
      .then(() => {
        console.log("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleRoomChange = () => {
    navigator(`/choose-team/${roomInputRef.current.value}`, { replace: true });

    // const roomJoinedStat = socket.current.emit(
    //   "join-room",
    //   roomInputRef.current.value,
    //   displayName
    // );
    setChangedRoomInput(false);
  };

  useEffect(() => {
    roomInputRef.current.value = initialRoomCode;
  });

  return (
    <div className="h-20 flex items-center justify-end gap-2 flex-col">
      <span className="text-xl font-bold text-black">Current Room: </span>
      <input
        className="bg-slate-800 py-2 text-xl font-bold uppercase tracking-[8px] text-center rounded-full px-4 w-[170px] text-white"
        onChange={(e) => {
          setChangedRoomInput(true);
          const value = e.target.value.toUpperCase();
          const letter = value.trim().split("");

          if (letter.length <= 5) {
            e.target.value = value;
          } else {
            e.target.value = letter.slice(0, 5).join("");
            console.log(e.target.value);
          }
        }}
        ref={roomInputRef}
      />
      <button
        className="btn btn-secondary "
        onClick={changedRoomInput ? handleRoomChange : handleCopy}
      >
        {changedRoomInput ? "Go To Room" : "Copy Code"}
      </button>
    </div>
  );
}

export default RoomCodeInput;
