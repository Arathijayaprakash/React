import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";

describe("Login component", () => {
  it("should login with valid credentials", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    const usernameInput = screen.getByLabelText("Username");
    const passwordInput = screen.getByLabelText("Password");
    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.change(usernameInput, { target: { value: "admin@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "admin" } });
    fireEvent.click(loginButton);

   
  });
});