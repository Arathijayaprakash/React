import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import classes from "./CartIcon.module.css";
import { useSelector,useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const CartIcon = () => {
  const cartQuantity = useSelector((state) => state.cart.cartTotalQuantity);
  const dispatch=useDispatch()
  const onCartHandler=()=>{
    dispatch(uiActions.cartShown())
  }
  return (
    <div className={classes.cart} onClick={onCartHandler}>
      <ShoppingCartIcon />
      <span className={classes.round}>
        <span className={classes.count}>{cartQuantity}</span>
      </span>
     
    </div>
  );
};

export default CartIcon;
