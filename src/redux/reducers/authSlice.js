import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    accessToken: "",
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isLoggedIn = true;
    },
    register: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = {};
      state.accessToken = "";
      state.isLoggedIn = false;
    },
    refreshAuthToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export const selectAuth = (state) => state.auth;

export const { login, logout, register, refreshAuthToken } = authSlice.actions;

export default authSlice.reducer;
