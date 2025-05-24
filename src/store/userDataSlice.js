import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayName: undefined,
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,

  reducers: {
    changeDisplayName: (state, action) => {
      state.displayName = action.payload;
      console.log(state.displayName);
    },
  },
});

export const { changeDisplayName } = userDataSlice.actions;

export default userDataSlice.reducer;
