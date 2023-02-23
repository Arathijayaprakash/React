import { render, screen } from "@testing-library/react";
import MainNavigation from "./MainNavigation";

test('renders GlaMMyaPP in main navigation ', () => {
    render(<MainNavigation />);
    const linkElement = screen.getByText(/GlaMMyaPP/i);
    expect(linkElement).toBeInTheDocument();
  });