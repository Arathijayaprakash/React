import { render,screen} from "@testing-library/react";
import AdminHome from "./AdminHome";
import { MemoryRouter } from "react-router-dom";

jest.mock("./SideMenu", () => () => <div data-testid="side-menu-mock" />);

test("renders SideMenu", async () => {
  render(
    <MemoryRouter>
      <AdminHome />
    </MemoryRouter>
  );
  const sideMenu = screen.getByTestId("side-menu-mock");
  expect(sideMenu).toBeInTheDocument();

});
