import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Orders from "./Orders";

jest.mock("../useFetchOrders", () => () => {
  return [
    [
      {
        user: "user2",
        title: "product3",
        image: "image3.png",
        price: 20,
        quantity: 1,
        totalPrice: 20,
      },
    ],
  ];
});



describe("Orders", () => {
  test("should render with user's order", async () => {
    render(<Orders />);
    await waitFor(() => {
      const loadingElement = screen.queryByText("Loading...");
      expect(loadingElement).not.toBeInTheDocument();
    });
  
  });
  test("should render the orders component with no orders message",async()=>{
    jest.mock("../useFetchOrders",()=>()=>{
      return [[]]
    })
    render(<Orders/>)
    await waitFor(()=>{
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
    })
    expect(screen.getByText("You have no orders yet")).toBeInTheDocument()
  })
});
