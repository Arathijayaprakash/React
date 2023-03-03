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
  const cart = useSelector((state) => state.cart);
  const adminLogged = useSelector((state) => state.ui.isAdminlogged);

  useEffect(() => {
    fetch("https://ebeautyapp-55c72-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    });
  }, [cart]);
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
