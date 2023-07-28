import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store, persistor } from "../../store";
import { PersistGate } from "redux-persist/integration/react";
import Login from "./Login";
import { MemoryRouter } from "react-router-dom";

global.alert=jest.fn()

describe("Login component", () => {
  it("should login with valid credentials", async () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MemoryRouter>
            <Login />
          </MemoryRouter>
        </PersistGate>
      </Provider>
    );
    const usernameInput = screen.getByLabelText("Username");
    const passwordInput = screen.getByLabelText("Password");
    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.change(usernameInput, { target: { value: "admin@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "admin" } });
    fireEvent.click(loginButton);

    expect(global.alert).toHaveBeenCalledTimes(1);
    expect(global.alert).toHaveBeenCalledWith("login successfull")
  });
});
