import { createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

let socketInstance = null;

const initialState = {
  displayName: "no user",
  team: undefined,
  role: undefined,
  numberOfPlayer: 1,
  isSocketConnected: false,
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,

  reducers: {
    changeDisplayName: (state, action) => {
      state.displayName = action.payload;
    },

    changeRole: (state, action) => {
      state.role = action.payload;
    },

    changeTeam: (state, action) => {
      state.team = action.payload;
    },

    changeNumberOfTeam: (state, action) => {
      state.numberOfPlayer = action.payload;
    },

    connectSocket: (state) => {
      if (!socketInstance) {
        socketInstance = io("http://localhost:3000");
        state.isSocketConnected = true;
      }
    },

    disconnectSocket: (state) => {
      if (socketInstance) {
        socketInstance.disconnect();
        socketInstance = null;
        state.isSocketConnected = false;
      }
    },
  },
});

export const {
  changeDisplayName,
  changeRole,
  changeTeam,
  connectSocket,
  changeNumberOfTeam,
  disconnectSocket,
} = userDataSlice.actions;

export const getSocketInstance = () => socketInstance;

export default userDataSlice.reducer;
