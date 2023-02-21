import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loginVisible:true,
    logoutVisible: false,
    isUserlogged: false,
    cartVisible:false,
    cartIconVisible:true,
    isAdminlogged:false
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
    },
    cartIconShown(state){
      state.cartIconVisible=!state.cartIconVisible
    },
    adminLog(state){
      state.isAdminlogged=!state.isAdminlogged
    }
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
