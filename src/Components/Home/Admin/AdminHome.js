import React from 'react'
import SideMenu from './SideMenu'
import classes from "./Admin.module.css";
import { Outlet } from 'react-router-dom';
import { Button } from '@mui/material';

const AdminHome = () => {
  return (
    <div className={classes.home}>
      <SideMenu/>
      <Outlet/>
      
    </div>
  )
}

export default AdminHome
