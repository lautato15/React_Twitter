import { createSlice } from "@reduxjs/toolkit";

const loggedSlice = createSlice({
  name: "logged",
  initialState: null,
  reducers: {
    login(state, action) {
      return action.payload;
    },
    logout(state, action) {
      return null;
    },
  },
});

const { actions, reducer } = loggedSlice;
export const { login, logout } = actions;
export default reducer;
