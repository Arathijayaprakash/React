import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import CategoryNav from "../Components/CategoryNav";
import MainNavigation from "../Components/MainNavigation/MainNavigation";
import { useSelector } from "react-redux";
import Cart from "../Components/Cart/Cart";
import Banner from "../Components/Home/Banner";
import Footer from "../Components/Footer";

const RootLayout = () => {
  const cartVisible = useSelector((state) => state.ui.cartVisible);
  const userEmail = useSelector((state) => state.cart.userEmail);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
  const adminLogged = useSelector((state) => state.ui.isAdminlogged);

  useEffect(() => {
    const cart = {
      userEmail: localStorage.getItem('userEmail'),
      cartItems: cartItems,
      cartTotalQuantity: cartTotalQuantity,
      cartTotalAmount: cartTotalAmount,
    };
    fetch("https://ebeautyapp-55c72-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    });
  }, [userEmail, cartItems, cartTotalAmount, cartTotalQuantity]);
  
  return (
    <div>
      <MainNavigation />
      {!adminLogged && <CategoryNav />}
      {cartVisible && <Cart />}
      <main>
        {!adminLogged && <Banner />}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
