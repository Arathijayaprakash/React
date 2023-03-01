import { render, screen } from "@testing-library/react";
import MainNavigation from "./MainNavigation";
import { Provider } from "react-redux";
import store from "../../store";
import { BrowserRouter } from "react-router-dom";

describe("MainNavigation tests", () => {
  test("renders GlaMMyaPP in main navigation", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MainNavigation />
        </BrowserRouter>
      </Provider>
    );
    const linkElement = screen.getByText(/GlaMMyaPP/i);
    expect(linkElement).toBeInTheDocument();
  })
  test("renders Login in main navigation", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MainNavigation />
        </BrowserRouter>
      </Provider>
    );
    const linkElement = screen.getByText(/Login/i);
    expect(linkElement).toBeInTheDocument();
  });  
});
