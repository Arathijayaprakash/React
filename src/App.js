import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home";
import ProductListPage from "./Pages/ProductList";
import RootLayout from "./Pages/Root";
import Loginpage from "./Pages/Login";
import MakeUpProducts from "./Components/Products/MakeUpProducts";
import SkinProducts from "./Components/Products/SkinProducts";
import HairProducts from "./Components/Products/HairProducts";
import AdminHomePage from "./Pages/AdminHomePage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index:true, element: <ProductListPage /> },
        { path: "products", element: <ProductListPage /> },
        { path: "login", element: <Loginpage /> },
        { path: "home", element: <HomePage /> },
        { path: "adminHome", element: <AdminHomePage /> },
        { path: "makeup", element: <MakeUpProducts /> },
        { path: "skin", element: <SkinProducts /> },
        { path: "hair", element: <HairProducts /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
