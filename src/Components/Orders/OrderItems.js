import React from "react";
import classes from "./Orders.module.css";
import { Card } from "@mui/material";

const OrderItems = (props) => {
  const { title, image, price} = props;

  return (
    <Card sx={{ maxWidth: 300 }} className={classes.order}>
      <p>{title}</p>
      <img src={image} alt={image} />
      <p>₹{price}</p>
    </Card>
  );
};

export default OrderItems;
