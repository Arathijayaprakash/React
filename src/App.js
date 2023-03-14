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
import { CheckAdminAuthLoader, CheckUserAuthLoader } from "./Auth/auth";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <ProductListPage /> },
        { path: "products", element: <ProductListPage /> },
        { path: "login", element: <Loginpage /> },
        { path: "signup", element: <SignUp /> },
        {
          element: <CheckUserAuthLoader />,
          children: [{ path: "home", element: <HomePage /> }],
        },
        {
          element: <CheckAdminAuthLoader />,
          children: [
            {
              path: "adminHome",
              element: <AdminHomePage />,
              loader: CheckAdminAuthLoader,
              children: [
                { index: true, element: <PageContent /> },
                { path: "products", element: <ProductListPage /> },
                { path: "admintable", element: <Admin /> },
                { path: "statistics", element: <Statistics /> },
              ],
            },
          ],
        },

        { path: "products/:category", element: <ProductCategory /> },
        {
          element: <CheckUserAuthLoader />,
          children: [
            {
              path: "orders",
              element: <Orders />,
              loader: CheckUserAuthLoader,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
