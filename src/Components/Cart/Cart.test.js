import { Provider } from "react-redux";
import { store, persistor } from "../../store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import Cart from "./Cart";
import { render, screen } from "@testing-library/react";

describe("Cart tests", () => {
  test("renders Your Shopping Cart in cart page", () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Cart />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
    const linkElement = screen.getByText(/Your Shopping Cart/i);
    expect(linkElement).toBeInTheDocument();
  });
});
