import {
  ShoppingBasketOutlined,
  ShoppingCartOutlined,
  VerifiedUserOutlined,
} from "@mui/icons-material";
import { Space, Typography } from "antd";
import React from "react";
import DashboardCard from "./DashboardCard";
import StatisticChart from "./PieChart";
import useFetch from "../../useFetch";
import classes from "./Admin.module.css";


const PageContent = () => {
  const [products] = useFetch(
    "https://ebeautyapp-55c72-default-rtdb.firebaseio.com/products.json"
  );
  const [users] = useFetch(
    "https://ebeautyapp-55c72-default-rtdb.firebaseio.com/users.json"
  );
  const [orders] = useFetch(
    "https://ebeautyapp-55c72-default-rtdb.firebaseio.com/orders.json"
  );
  const totalProducts = products.length;
  const totalUsers = users.length;
  const totalOrders = orders.length;
  return (
    <div className={classes.dash}>
      <div>
        <Typography.Title level={3}>Dashboard</Typography.Title>
       
      </div>

      <Space direction="horizontal">
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.5)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Orders"}
          value={totalOrders}
        />
        <DashboardCard
          icon={
            <ShoppingBasketOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Products"}
          value={totalProducts}
        />
        <DashboardCard
          icon={
            <VerifiedUserOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Customers"}
          value={totalUsers}
        />
        <div className={classes.chart}>
          <h2>Pie chart</h2>
          <StatisticChart />
        </div>
      </Space>
    </div>
  );
};

export default PageContent;
