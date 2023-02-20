import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import CartIcon from "../Cart/CartIcon";

export default function MainNavigation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginVisible = useSelector((state) => state.ui.loginVisible);
  const logoutVisible = useSelector((state) => state.ui.logoutVisible);
  localStorage.setItem('loginVisible',loginVisible)
  
  const onLoginHandler = () => {
    navigate("/login");
    dispatch(uiActions.loginShow());
    localStorage.setItem('loginVisible',loginVisible)
  };
  const onLogoutHandler = () => {
    navigate("../");
    dispatch(uiActions.loginShow());
    localStorage.setItem('loginVisible',loginVisible)
   
    dispatch(uiActions.logoutShow());
  };

  return (
    <Box sx={{ flexGrow: 1 }} position='fixed'>
      <AppBar  color="secondary" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Beauty
          </Typography>
         
            <CartIcon/>
       

          {loginVisible ? (
            <Button color="inherit" onClick={onLoginHandler}>
              Login
            </Button>
          ):''}
          {logoutVisible && (
            <Button color="inherit" onClick={onLogoutHandler}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
