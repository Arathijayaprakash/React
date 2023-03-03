import React from "react";
import { Menu } from "antd";
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableViewIcon from '@mui/icons-material/TableView';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import PieChartIcon from '@mui/icons-material/PieChart';

const SideMenu = () => {
    const navigate=useNavigate()
  return (
    <div>
      <Menu 
        onClick={(item) => {
            navigate(item.key);
        }}
        items={[
          {
            label: "Dashboard",
            icon:<DashboardIcon/>,
            key: "/adminHome",
          },
          {
            label: "View Products",
            icon:<AddIcon/>,
            key: "/adminHome/products",
          },
          {
            label: "Product table",
            icon:<TableViewIcon/>,
            key: "/adminHome/admintable",
          },
          {
            label:'Statistics',
            icon:<PieChartIcon/>,
            key:'/adminHome/statistics'
          }
        ]}
      ></Menu>
    </div>
  );
};

export default SideMenu;
