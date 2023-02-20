import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loginVisible: localStorage.getItem('loginVisible')?localStorage.getItem('loginVisible'):true,
    logoutVisible: false,
    isUserlogged: false,
    cartVisible:false
  },
  reducers: {
    loginShow(state) {
      state.loginVisible = !state.loginVisible;
    },
    logoutShow(state) {
      state.logoutVisible = !state.logoutVisible;
    },
    userLog(state) {
      state.isUserlogged = !state.isUserlogged;
    },
    cartShown(state){
      state.cartVisible=!state.cartVisible
    }
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
