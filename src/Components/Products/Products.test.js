import { render, screen } from "@testing-library/react";
import Products from "./Products";
import { Provider } from "react-redux";
import { store, persistor } from "../../store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

jest.mock("../useFetch", () => ({
  __esModule: true,
  default: () => [
    [
      {
        id: 1,
        title: "Product 1",
        image: "image1.jpg",
        price: 10,
        category: "Category 1",
        quantity: 5,
      },
      {
        id: 2,
        title: "Product 2",
        image: "image2.jpg",
        price: 20,
        category: "Category 2",
        quantity: 10,
      },
      {
        id: 3,
        title: "Product 3",
        image: "image3.jpg",
        price: 30,
        category: "Category 1",
        quantity: 0,
      },
    ],
    null,
  ],
}));

describe("Products component", () => {
  test("renders a list of products", () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Products />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getByText("Product 3")).toBeInTheDocument();
  });

  test("renders pagination buttons", () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Products />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
    expect(screen.getByText("prev")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("next")).toBeInTheDocument();
  });
});
