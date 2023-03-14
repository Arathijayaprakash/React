import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import { BrowserRouter } from "react-router-dom";
import CategoryNav from "./CategoryNav";


describe('Category nav',()=>{
    test("renders skin in category nav", () => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <CategoryNav />
            </BrowserRouter>
          </Provider>
        );
        const linkElement = screen.getByText(/Skin/i);
        expect(linkElement).toBeInTheDocument();
      })
      test("renders hair in category nav", () => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <CategoryNav />
            </BrowserRouter>
          </Provider>
        );
        const linkElement = screen.getByText(/Hair/i);
        expect(linkElement).toBeInTheDocument();
      })
      test("renders makeup in category nav", () => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <CategoryNav />
            </BrowserRouter>
          </Provider>
        );
        const linkElement = screen.getByText(/MakeUp/i);
        expect(linkElement).toBeInTheDocument();
      })
})
