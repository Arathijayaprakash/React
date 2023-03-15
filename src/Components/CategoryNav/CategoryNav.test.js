import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import { BrowserRouter } from "react-router-dom";
import CategoryNav from "./CategoryNav";

jest.mock("../useFetch", () => () => [
  [
    { id: 1, category: "Skin" },
    { id: 2, category: "MakeUp" },
    { id: 3, category: "Hair" },
  ],
]);

describe("Category nav", () => {
  test("renders unique categories as nav links", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CategoryNav />
        </BrowserRouter>
      </Provider>
    );
    const skinLink = screen.getByText(/skin/i);
    const makeupLink = screen.getByText(/makeup/i);
    const hairLink = screen.getByText(/hair/i);
    expect(skinLink).toBeInTheDocument();
    expect(makeupLink).toBeInTheDocument();
    expect(hairLink).toBeInTheDocument();
  });
  
});
