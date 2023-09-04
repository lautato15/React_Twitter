import { configureStore } from "@reduxjs/toolkit";
import loggedReducer from "./loggedSlice";
import tweetsReducer from "./tweetsSlice";

const store = configureStore({
  reducer: { logged: loggedReducer, tweets: tweetsReducer },
});

export default store;
