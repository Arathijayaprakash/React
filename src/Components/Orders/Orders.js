import React from "react";
import useFetchOrders from "../useFetchOrders";
import OrderItems from "./OrderItems";

const Orders = () => {
  const userEmail = localStorage.getItem("userEmail");
  const [orders] = useFetchOrders(
    "https://ebeautyapp-55c72-default-rtdb.firebaseio.com/orders.json"
  );

  const userOrder = orders
    .filter((order) => order.user === userEmail)
    .map((item) => <OrderItems user={item.user} title={item.title} />);
  return <div>{userOrder}</div>;
};

export default Orders;
