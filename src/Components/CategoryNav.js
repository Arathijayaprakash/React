import React from "react";
import classes from "./CategoryNav.module.css";
import { NavLink } from "react-router-dom";

const CategoryNav = () => {
  return (
    <nav>
      <ul className={classes.lists}>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to="/makeup"
          
        >
        
          <li>MakeUp</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to="/skin"
        >
          <li>Skin</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to="/hair"
        >
          <li>Hair</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default CategoryNav;
