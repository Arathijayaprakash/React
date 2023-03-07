import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home";
import ProductListPage from "./Pages/ProductList";
import RootLayout from "./Pages/Root";
import Loginpage from "./Pages/Login";
import AdminHomePage from "./Pages/AdminHomePage";
import PageContent from "./Components/Home/Admin/Dashboard";
import Admin from "./Components/Home/Admin/Admin";
import Statistics from "./Components/Home/Admin/Statistics";
import SignUp from "./Components/SignUp/SignUp";
import Orders from "./Components/Orders/Orders";
import ProductCategory from "./Components/Products/ProductCategory";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <ProductListPage /> },
        { path: "products", element: <ProductListPage /> },
        { path: "login", element: <Loginpage /> },
        { path: "signup", element: <SignUp/> },
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
        {path:'products/:category',element:<ProductCategory/>},
        { path: "orders", element: <Orders/> },

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
