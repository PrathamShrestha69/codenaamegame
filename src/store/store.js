import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./userDataSlice.js";

export const store = configureStore({
  reducer: userDataSlice,
});
