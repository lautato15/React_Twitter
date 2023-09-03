import { createSlice } from "@reduxjs/toolkit";

const interactiveSlice = createSlice({
  name: "interactive",
  initialState: false,
  reducers: {
    like: (state, action) => {
      return state.map((tweet) => {
        if (tweet.id === action.payload.id) {
          return { ...tweet, isLiked: !tweet.isLiked };
        }
        return tweet;
      });
    },
    follow: (state, action) => {
      return state.map((user) => {
        if (user.id === action.payload) {
          return { ...user, isFollowing: !user.isFollowing };
        }
        return user;
      });
    },
  },
});
const { actions, reducer } = interactiveSlice;
export const { like, follow } = actions;
export default reducer;
