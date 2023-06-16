import { render, screen } from "@testing-library/react";
import MainNavigation from "./MainNavigation";
import { Provider } from "react-redux";
import {store,persistor} from "../../store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

describe("MainNavigation tests", () => {
  test("renders GlaMMyaPP in main navigation", () => {
    render(
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <MainNavigation />
        </BrowserRouter>
        </PersistGate>
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
