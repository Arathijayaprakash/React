import React from "react";
import useFetchOrders from "../useFetchOrders";
import OrderItems from "./OrderItems";
import classes from "./Orders.module.css";

const Orders = () => {
  const userEmail = localStorage.getItem("userEmail");
  const [orders] = useFetchOrders(
    "https://ebeautyapp-55c72-default-rtdb.firebaseio.com/orders.json"
  );

 
  const user = orders.filter((order) => order.user === userEmail);
  const totalPrices = user.map((item) => item.totalPrice);
  const orderTotal = totalPrices.reduce((sum, price) => {
    return +sum + +price;
  }, 0);

  let userOrder = (
    <div>
      <div className={classes.orders}>
        {user.map((item) => (
          <OrderItems
            user={item.user}
            title={item.title}
            image={item.image}
            price={item.price}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
          />
        ))}
      </div>
      <p>Order Total: ₹{orderTotal}</p>
    </div>
  );
  if (user.length === 0) {
    userOrder = <p>You have no orders yet</p>;
  }
  return (
    <div className={classes.orderpage}>
      {" "}
      <h2>Your Orders</h2>
      <div>{userOrder}</div>
    </div>
  );
};

export default Orders;
