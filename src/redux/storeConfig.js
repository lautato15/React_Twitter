import { configureStore } from "@reduxjs/toolkit";
import loggedReducer from "./loggedSlice";
import tweetsReducer from "./tweetsSlice";
import profileReducer from "./profileSlice";

const store = configureStore({
  reducer: {
    logged: loggedReducer,
    tweets: tweetsReducer,
    profileShow: profileReducer,
  },
});

export default store;
