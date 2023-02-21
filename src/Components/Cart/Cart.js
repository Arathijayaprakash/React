import React from "react";
import { Button, Card } from "@mui/material";
import { useSelector,useDispatch } from "react-redux";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { cartActions } from "../../store/cart-slice";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const cartQuantity = useSelector((state) => state.cart.cartTotalQuantity);
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
const dispatch=useDispatch()
  const placeOrderHandler = () => {
    const items={
      cartProducts:cartProducts
    }
    fetch(
      "https://ebeautyapp-55c72-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify(items),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(alert("Order placed successfully"))
    
    dispatch(cartActions.clearCart())
    localStorage.setItem('cartItems',[])
    
  
  };

  let cart = (
    <div>
      <ul className={classes.cartItems}>
        {cartProducts.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
              image: item.image,
            }}
          />
        ))}
        {<div>SubTotal:{cartTotalAmount}</div>}
      </ul>
      <Button onClick={placeOrderHandler}>Place order</Button>
    </div>
  );
  if (cartQuantity === 0) {
    cart = <p>Your cart is empty</p>;
  }

  return (
    <Card className={classes.cart} sx={{ maxWidth: 800 }}>
      <div className={classes.heading}>
        <ArrowBackIosNewIcon />
        <h2>Your Shopping Cart</h2>
      </div>
      <hr />
      <div className={classes.cartItems}> {cart}</div>
    </Card>
  );
};

export default Cart;
