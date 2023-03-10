import React from "react";
import { Button, Card } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { cartActions } from "../../store/cart-slice";

const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  const cartQuantity = useSelector((state) => state.cart.cartTotalQuantity);
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
  const userLogged = useSelector((state) => state.ui.isUserlogged);

  const dispatch = useDispatch();
  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  };

  const placeOrderHandler = () => {
    const items = {
      cartProducts: cartData.cartItems,
      user: localStorage.getItem("userEmail"),
    };
    fetch("https://ebeautyapp-55c72-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify(items),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(alert("Order placed successfully"));

    dispatch(cartActions.clearCart());
    // localStorage.setItem("cartItems", []);
  };

  let cart = (
    <div>
      <ul className={classes.cartItems}>
        {cartData.cartItems.map((item) => (
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
      </ul>
      <div className={classes.summary}>
        <div className={classes.total}>
          Subtotal:<div className={classes.amount}>₹{cartTotalAmount}</div>
        </div>
        <div className={classes.actions}>
          <Button variant="contained" color="error" onClick={clearCartHandler}>
            CLEAR CART
          </Button>
          {userLogged ? (
            <Button
              variant="contained"
              style={{ backgroundColor: "#b82b6c", marginLeft: "10px" }}
              onClick={placeOrderHandler}
            >
              PLACE ORDER
            </Button>
          ) : (
            <p>Please login to place order</p>
          )}
        </div>
      </div>
    </div>
  );
  if (cartQuantity === 0) {
    cart = <p>Your cart is empty</p>;
  }

  return (
    <Card className={classes.cart}>
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
