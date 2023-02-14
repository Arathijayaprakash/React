import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function MainNavigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElMenu, setAnchorElMenu] = React.useState(null);
  const open = Boolean(anchorEl);
  const openMenu = Boolean(anchorElMenu);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuClick = (event) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorElMenu(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleMenuClick}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleMenuClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
          <MenuItem onClick={handleMenuClose}>All Products</MenuItem>
            <MenuItem onClick={handleMenuClose}>MakeUp</MenuItem>
            <MenuItem onClick={handleMenuClose}>Skin</MenuItem>
            <MenuItem onClick={handleMenuClose}>Hair</MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Beauty
          </Typography>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            color="inherit"
          >
            Login
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
            <MenuItem onClick={handleClose}>User</MenuItem>
            <MenuItem onClick={handleClose}>Admin</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
