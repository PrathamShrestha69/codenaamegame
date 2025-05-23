import React from "react";

function Home() {
  return (
    <div className="bg-[#79AEA3]  h-screen w-screen flex flex-col items-center justify-center">
      <div className="bg-[#34623F] shadow-lg shadow-[#34623F] rounded-2xl 50 flex flex-col items-center p-6">
        <div className="text-xl font-bold px-3 py-2 text-white">Play Games</div>

        {/* form */}
        <div className="">
          <div className="text-start font-bold">
            {" "}
            To Enter The Game,Choose Your Nickname:
          </div>

          <input
            type="text"
            name="username"
            className="bg-white rounded-2xl px-6 py-2 w-80 text-black placeholder-gray-400 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
            placeholder="Username"
          />
        </div>

        <button className="btn btn-secondary mt-4 ">Play Game</button>
      </div>
    </div>
  );
}

export default Home;
