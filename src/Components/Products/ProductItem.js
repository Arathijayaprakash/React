import React from "react";
import classes from "./Product.module.css";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { cartActions } from "../../store/cart-slice";
import { useSelector, useDispatch } from "react-redux";
import { redirect } from "react-router-dom";

const ProductItem = (props) => {
  const { id, title, price, image, quantity } = props;
  const dispatch = useDispatch();
  const userLogged = useSelector((state) => state.ui.isUserlogged);
  const adminLogged = useSelector((state) => state.ui.isAdminlogged);
  const userEmail = localStorage.getItem("userEmail");
  const onAddToCartHandler = () => {
    userLogged
      ? dispatch(
          cartActions.addToCart({ id, title, price, image, quantity, userEmail })
        )
      : alert("Please Login...");
  };
  const onDeleteHandler = async (id) => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      const response = fetch(
        `https://ebeautyapp-55c72-default-rtdb.firebaseio.com/products/${id}.json`,
        { method: "DELETE" }
      );
      if (!response.ok) {
        console.log("Error while deleting");
      }

      return redirect("/adminHome");
    }
  };
  return (
    <div className={classes.products}>
      <ul key={id} className={classes.list}>
        <Card sx={{ maxWidth: 300 }} className={classes.item}>
          <h3>{title}</h3>
          <img src={image} alt={title} />
          <div className={classes.content}>
            <h4>₹{price}</h4>
            {!adminLogged ? (
              <Button
                variant="contained"
                color="secondary"
                onClick={onAddToCartHandler}
              >
                Add to Cart
              </Button>
            ) : (
              <Button
                variant="contained"
                color="error"
                onClick={() => onDeleteHandler(id)}
              >
                Delete
              </Button>
            )}
            {/* {adminLogged && (
              <Button variant="contained" color="error" onClick={onDeleteHandler(id)}>
                Delete
              </Button>
            )} */}
          </div>
        </Card>
      </ul>
    </div>
  );
};

export default ProductItem;
