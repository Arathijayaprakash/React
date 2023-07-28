import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store, persistor } from "../../store";
import { PersistGate } from "redux-persist/integration/react";
import { MemoryRouter } from "react-router-dom";
import SignUp from "./SignUp";

describe("SignUp tests", () => {
  test("renders first name in signUp page", () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MemoryRouter>
            <SignUp />
          </MemoryRouter>
        </PersistGate>
      </Provider>
    );
    const linkElement = screen.getByText(/first name/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders last name in signUp page", () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MemoryRouter>
            <SignUp />
          </MemoryRouter>
        </PersistGate>
      </Provider>
    );
    const linkElement = screen.getByText(/last name/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders mobile in signUp page", () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MemoryRouter>
            <SignUp />
          </MemoryRouter>
        </PersistGate>
      </Provider>
    );
    const linkElement = screen.getByText(/mobile/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders House name in signUp page", () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MemoryRouter>
            <SignUp />
          </MemoryRouter>
        </PersistGate>
      </Provider>
    );
    const linkElement = screen.getByText(/house name/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders place in signUp page", () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MemoryRouter>
            <SignUp />
          </MemoryRouter>
        </PersistGate>
      </Provider>
    );
    const linkElement = screen.getByText(/place/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders city in signUp page", () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MemoryRouter>
            <SignUp />
          </MemoryRouter>
        </PersistGate>
      </Provider>
    );
    const linkElement = screen.getByText(/city/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders district in signUp page", () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MemoryRouter>
            <SignUp />
          </MemoryRouter>
        </PersistGate>
      </Provider>
    );
    const linkElement = screen.getByText(/district/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders state in signUp page", () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MemoryRouter>
            <SignUp />
          </MemoryRouter>
        </PersistGate>
      </Provider>
    );
    const linkElement = screen.getByText(/state/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders pin code in signUp page", () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MemoryRouter>
            <SignUp />
          </MemoryRouter>
        </PersistGate>
      </Provider>
    );
    const linkElement = screen.getByText(/pin code/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders email in signUp page", () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MemoryRouter>
            <SignUp />
          </MemoryRouter>
        </PersistGate>
      </Provider>
    );
    const linkElement = screen.getByText(/email/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders confirm password in signUp page", () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MemoryRouter>
            <SignUp />
          </MemoryRouter>
        </PersistGate>
      </Provider>
    );
    const linkElement = screen.getByText(/confirm password/i);
    expect(linkElement).toBeInTheDocument();
  });
});
