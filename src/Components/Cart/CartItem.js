import React from "react";
import classes from "../Products/Product.module.css";
import { Button, Card } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const { title, image, price, quantity, id,total } = props.item;
  const userEmail = localStorage.getItem("userEmail");
  const dispatch=useDispatch()
  const removeFromCart=()=>{
    dispatch(cartActions.removeFromCart(id))
  }
  const addToCart=()=>{
    dispatch(cartActions.addToCart({id,title,image,price,userEmail}))
  }
  const removeItem=()=>{
    dispatch(cartActions.removeItem(id))
  }
  return (
    <div className={classes.products}>
      <ul className={classes.list}>
        <Card sx={{ maxWidth: 300 }} className={classes.item}>
          <h3>{title}</h3>
          <img src={image} alt={title} />
          <div className={classes.content}>
            <h4>₹{total}</h4>
          </div>
          <div className={classes.actions}>
            <div>
              <Button onClick={addToCart}>+</Button>
              <span>{quantity}</span>
              <Button onClick={removeFromCart}>-</Button>
            </div>
            <Button onClick={removeItem} className={classes.remove} color="error">
              <DeleteIcon fontSize="small" color="error" /> Remove
            </Button>
          </div>
        </Card>
      </ul>
    </div>
  );
};

export default CartItem;
