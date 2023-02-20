import React from 'react'
import { Outlet } from 'react-router-dom'
import CategoryNav from '../Components/CategoryNav'
import MainNavigation from '../Components/MainNavigation/MainNavigation'
import { useSelector} from "react-redux";
import Cart from '../Components/Cart/Cart';
import Banner from '../Components/Home/Banner';
import Footer from '../Components/Footer';





const RootLayout = () => {
  const cartVisible=useSelector((state)=>state.ui.cartVisible)

  return (
    <div>
      <MainNavigation/>
      <CategoryNav/>
      {cartVisible && <Cart/>}
      <main>
      <Banner/>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default RootLayout
