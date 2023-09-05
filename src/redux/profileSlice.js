import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: [],
  reducers: {
    profile(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = profileSlice;
export const { profile } = actions;
export default reducer;
