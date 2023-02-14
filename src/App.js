import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductListPage from "./Pages/ProductList";
import RootLayout from "./Pages/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ path: "products", element: <ProductListPage /> }],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
