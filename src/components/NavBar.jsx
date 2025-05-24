import React from "react";
import { FaStopwatch, FaFaceLaugh, FaUser } from "react-icons/fa6";
import { useSelector } from "react-redux";

function NavBar() {
  const displayName = useSelector((state) => state.displayName);
  return (
    <div className="flex py-2 justify-between">
      <div className="flex gap-2">
        <button className="btn btn-primary">
          Players 1 <FaUser />
        </button>
        <button className="btn btn-primary w-10 h-10 py-0 px-0 rounded-full">
          <FaStopwatch size={"22px"} />
        </button>
      </div>
      <button className="btn btn-secondary">
        {displayName}
        <FaFaceLaugh />
      </button>
    </div>
  );
}

export default NavBar;
