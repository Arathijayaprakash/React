import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home";
import ProductListPage from "./Pages/ProductList";
import RootLayout from "./Pages/Root";
import Loginpage from "./Pages/Login";
import MakeUpProducts from "./Components/Products/MakeUpProducts";
import SkinProducts from "./Components/Products/SkinProducts";
import HairProducts from "./Components/Products/HairProducts";
import AdminHomePage from "./Pages/AdminHomePage";
import PageContent from "./Components/Home/Admin/Dashboard";
import Admin from "./Components/Home/Admin/Admin";
import Statistics from "./Components/Home/Admin/Statistics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <ProductListPage /> },
        { path: "products", element: <ProductListPage /> },
        { path: "login", element: <Loginpage /> },
        { path: "home", element: <HomePage /> },
        {
          path: "adminHome",
          element: <AdminHomePage />,
          children: [
            { index: true, element: <PageContent /> },
            { path: "products", element: <ProductListPage /> },
            { path: "admintable", element: <Admin /> },
            { path: "statistics", element: <Statistics /> },
          ],
        },
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
