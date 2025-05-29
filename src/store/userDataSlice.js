import { createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

let socketInstance = null;

const initialState = {
  displayName: "no user",
  team: undefined,
  role: undefined,
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
  disconnectSocket,
} = userDataSlice.actions;

export const getSocketInstance = () => socketInstance;

export default userDataSlice.reducer;
