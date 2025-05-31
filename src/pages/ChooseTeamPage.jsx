import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import TeamSelectionComponent from "../components/TeamSelectionComponent";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserIdFromLs } from "../utils/UserInfoLocalStorage";
import axios from "axios";
import {
  changeNumberOfTeam,
  connectSocket,
  disconnectSocket,
  getSocketInstance,
} from "../store/userDataSlice";
import RoomCodeInput from "../components/RoomCodeInput";

const getRoomInfo = async (roomName) => {
  const res = await axios.get(
    `${import.meta.env.VITE_APP_BACKEND_URL}/games/${roomName}`
  );
  return res.data;
};

const createRoomInDb = async (roomName, adminUserId) => {
  const res = await axios.post(
    `${import.meta.env.VITE_APP_BACKEND_URL}/games/${roomName}`,
    { adminUserId }
  );

  return res.data;
};

const generateRandomCodeAndTestInDB = async () => {
  let roomCodeExist = true;

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  while (roomCodeExist) {
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    const roomInfo = await getRoomInfo(result);
    if (!roomInfo) {
      roomCodeExist = false;
    }
  }

  return result;
};

const changeTeamInDB = (userUniqueID, team, role) => {
  axios
    .patch(
      `http://localhost:3000/users/changeuserteamandrole/${userUniqueID}`,
      {
        team,
        role,
      }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const changeCurrentUserRoomInDb = (userUniqueID, roomId) => {
  axios
    .patch(`http://localhost:3000/users/changecurrentroom/${userUniqueID}`, {
      roomId,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

function ChooseTeamPage() {
  const navigator = useNavigate();
  const userTeam = useSelector((state) => state.team);
  const userRole = useSelector((state) => state.role);
  // socket using redux
  const dispatch = useDispatch();
  const [socketInstance, setSocketInstance] = useState(null);

  const [currentRoomCode, setCurrentRoomCode] = useState(null);

  const roomCodePassedInparams = useParams().roomId;

  const [isRoomOwner, setisRoomOwner] = useState(false);

  const handleStartBtn = () => {
    navigator("/main-game");
  };

  //For Room
  useEffect(() => {
    const fetchAndCreateRoom = async () => {
      const randomlyGeneratedRoomCode = await generateRandomCodeAndTestInDB();
      setCurrentRoomCode(randomlyGeneratedRoomCode);

      createRoomInDb(randomlyGeneratedRoomCode, getUserIdFromLs());

      navigator(`/choose-team/${randomlyGeneratedRoomCode}`, { replace: true });
    };

    const createRoomIfNotExist = async (roomCode) => {
      const roomInfo = await getRoomInfo(roomCode.toUpperCase());

      if (roomInfo) {
        if (roomInfo.adminUser.userUniqueID === getUserIdFromLs()) {
          setisRoomOwner(true);
        }
      } else {
        createRoomInDb(roomCode.toUpperCase(), getUserIdFromLs());
      }
    };

    if (!roomCodePassedInparams) {
      fetchAndCreateRoom();
    } else {
      createRoomIfNotExist(roomCodePassedInparams);
      console.log(roomCodePassedInparams);
      changeCurrentUserRoomInDb(getUserIdFromLs(), roomCodePassedInparams);
      setCurrentRoomCode(roomCodePassedInparams);
    }
  }, [roomCodePassedInparams]);

  useEffect(() => {
    dispatch(connectSocket());
    const socket = getSocketInstance();
    setSocketInstance(socket);

    // Optional: handle events here
    socket.on("connect", () => {
      console.log("✅ Socket connected:", socket.id);
    });

    socket.on("user-num-change", ({ noOfUser }) => {
      dispatch(changeNumberOfTeam(noOfUser));
    });

    socket.on("disconnect", () => {
      console.log("❌ Socket disconnected");
    });

    return () => {
      dispatch(disconnectSocket());
      socket.disconnect(); // cleanup on unmount
    };
  }, []); // runs once on component mount

  useEffect(() => {
    if (socketInstance && currentRoomCode) {
      socketInstance.emit("join-room", {
        userId: getUserIdFromLs(),
        roomCode: currentRoomCode,
      });
      console.log("📡 Joined room:", currentRoomCode);
    }
  }, [socketInstance, currentRoomCode]); // runs when either becomes available

  return (
    <div className="bg-[#79AEA3] h-full px-28 ">
      <NavBar />
      <div className="flex justify-between mt-12">
        <TeamSelectionComponent team="blue" socketInstance={socketInstance} />
        <div className="flex flex-col items-center justify-center gap-3">
          <RoomCodeInput initialRoomCode={currentRoomCode} />
          {isRoomOwner && (
            <button
              className="btn btn-primary text-xl font-bold"
              onClick={handleStartBtn}
            >
              Start The Game
            </button>
          )}
        </div>
        <TeamSelectionComponent team="red" socketInstance={socketInstance} />
      </div>
    </div>
  );
}

export default ChooseTeamPage;
