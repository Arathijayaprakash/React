import React from "react";
import classes from "./Product.module.css";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { cartActions } from "../../store/cart-slice";
import { useSelector, useDispatch } from "react-redux";

const ProductItem = (props) => {
  const { id, title, price, image, quantity } = props;
  const dispatch = useDispatch();
  const userLogged = useSelector((state) => state.ui.isUserlogged);
  const adminLogged = useSelector((state) => state.ui.isAdminlogged);
  const onAddToCartHandler = () => {
    userLogged
      ? dispatch(cartActions.addToCart({ id, title, price, image, quantity }))
      : alert("Please Login...");
  };
  return (
    <div className={classes.products}>
      <ul key={id} className={classes.list}>
        <Card sx={{ maxWidth: 300 }} className={classes.item}>
          <h3>{title}</h3>
          <img src={image} alt={title} />
          <div className={classes.content}>
            <h4>₹{price}</h4>
            {!adminLogged && (
              <Button
                variant="contained"
                color="secondary"
                onClick={onAddToCartHandler}
              >
                Add to Cart
              </Button>
            )}
          </div>
        </Card>
      </ul>
    </div>
  );
};

export default ProductItem;
