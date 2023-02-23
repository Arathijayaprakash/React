import { render, screen } from "@testing-library/react";
import Products from "./Products";

describe("fetch component", () => {
  test("renders products if request succeeds", async () => {
    render(<Products />);
    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});
