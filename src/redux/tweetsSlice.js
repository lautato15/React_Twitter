import { createSlice } from "@reduxjs/toolkit";

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: [],
  reducers: {
    followingsTweets(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = tweetsSlice;
export const { followingsTweets } = actions;
export default reducer;
