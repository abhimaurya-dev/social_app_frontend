import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    register: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = {};
      state.isLoggedIn = false;
    },
  },
});

export const selectAuth = (state) => state.auth;

export const { login, logout, register } = authSlice.actions;

export default authSlice.reducer;
