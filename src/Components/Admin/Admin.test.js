import { render, screen } from "@testing-library/react";
import Admin from "./Admin";

describe("Admin", () => {
  test("renders the admin table", async () => {
    render(<Admin />);
    const table = await screen.findByRole("table");
    expect(table).toBeInTheDocument();
  });
});
