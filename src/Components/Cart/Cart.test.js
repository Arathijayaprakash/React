import { Provider } from "react-redux";
import store from "../../store";
import { BrowserRouter } from "react-router-dom";
import Cart from "./Cart";
import { render, screen } from "@testing-library/react";

describe("Cart tests", () => {
    test("renders Your Shopping Cart in cart page", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Cart />
          </BrowserRouter>
        </Provider>
      );
      const linkElement = screen.getByText(/Your Shopping Cart/i);
      expect(linkElement).toBeInTheDocument();
    })
  });
  