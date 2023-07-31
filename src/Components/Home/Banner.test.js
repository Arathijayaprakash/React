import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

describe("Banner", () => {
  test("renders the banner component", () => {
    render(<Banner />);
    const bannercomponent = screen.getByTestId("banner-component");
    expect(bannercomponent).toBeInTheDocument();
  });
});
