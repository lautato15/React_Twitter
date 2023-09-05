import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: null,
  reducers: {
    profileShow(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = profileSlice;
export const { profileShow } = actions;
export default reducer;
