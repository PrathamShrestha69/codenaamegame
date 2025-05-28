import { createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

const socketInstance = null;

const initialState = {
  displayName: "no user",
  team: undefined,
  role: undefined,
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
  },
});

export const { changeDisplayName, changeRole, changeTeam } =
  userDataSlice.actions;

export default userDataSlice.reducer;
