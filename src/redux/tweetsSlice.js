import { createSlice } from "@reduxjs/toolkit";

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: [],
  reducers: {
    tweets(state, action) {
      return action.payload;
    },
    like: (state, action) => {
      const selectedTweet = state.find(
        (tweet) => tweet.id === action.payload.tweetId
      );
      const liked = selectedTweet.likes.includes(action.payload.userId);
      if (!liked) {
        selectedTweet.likes.push(action.payload.userId);
      } else {
        selectedTweet.likes = selectedTweet.likes.filter(
          (item) => item !== action.payload.userId
        );
      }
    },
  },
});

const { actions, reducer } = tweetsSlice;
export const { tweets, like } = actions;
export default reducer;
