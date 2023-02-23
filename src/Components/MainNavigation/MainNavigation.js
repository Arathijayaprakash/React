/* eslint-disable no-lone-blocks */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { cartActions } from "../../store/cart-slice";
import classes from "./MainNavigation.module.css";
import CartIcon from "../Cart/CartIcon";


export default function MainNavigation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginVisible = useSelector((state) => state.ui.loginVisible);
  const logoutVisible = useSelector((state) => state.ui.logoutVisible);
  const cartIconVisible = useSelector((state) => state.ui.cartIconVisible);
  const adminLogged = useSelector((state) => state.ui.isAdminlogged);
  const userLogged = useSelector((state) => state.ui.isUserlogged);
  localStorage.setItem("loginVisible", loginVisible);
  const user = localStorage.getItem("user");
  let welcomeNote = "";
  if (adminLogged) {
    welcomeNote = "Welcome Admin";
  } else if (userLogged) {
    welcomeNote = `Welcome ${user}`;
  }
  const onLoginHandler = () => {
   
    navigate("/login");
    dispatch(uiActions.loginShow());
    localStorage.setItem("loginVisible", loginVisible);
  };
  const onLogoutHandler = () => {
    navigate("../");
    dispatch(uiActions.loginShow());
    localStorage.setItem("loginVisible", loginVisible);
    welcomeNote = "";
    {
      userLogged && dispatch(uiActions.userLog());
    }
    dispatch(uiActions.logoutShow());

    {
      adminLogged && dispatch(uiActions.adminLog());
    }
    {
      adminLogged && dispatch(uiActions.cartIconShown());
    }
    dispatch(cartActions.clearCart());
    localStorage.clear();
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }} position="fixed">
      <AppBar className={classes.background}>
        <Toolbar>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            color="inherit"
          >
            <MenuIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {adminLogged && (
              <Link
                to="adminHome"
                style={{ textDecoration: "none", color: "salmon" }}
              >
                <MenuItem onClick={handleClose}>Home</MenuItem>
              </Link>
            )}
            <Link
              to="products"
              style={{ textDecoration: "none", color: "salmon" }}
            >
              <MenuItem onClick={handleClose}>All Products</MenuItem>
            </Link>
            <Link
              to="makeup"
              style={{ textDecoration: "none", color: "salmon" }}
            >
              <MenuItem onClick={handleClose}>MakeUp</MenuItem>
            </Link>
            <Link to="skin" style={{ textDecoration: "none", color: "salmon" }}>
              <MenuItem onClick={handleClose}>Skin</MenuItem>
            </Link>
            <Link to="hair" style={{ textDecoration: "none", color: "salmon" }}>
              <MenuItem onClick={handleClose}>Hair</MenuItem>
            </Link>
          </Menu>

          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            GlammYaPP
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ flexGrow: 0.03 }}
          >
            {welcomeNote}
          </Typography>

          {cartIconVisible && <CartIcon />}

          {loginVisible ? (
            <Button color="inherit" onClick={onLoginHandler}>
              Login
            </Button>
          ) : (
            ""
          )}
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
