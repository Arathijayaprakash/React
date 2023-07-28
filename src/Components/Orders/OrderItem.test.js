import OrderItems from "./OrderItems";
import { render,screen } from "@testing-library/react";

describe("OrderItems component",()=>{
    const props={
        title:"Product1",
        image:"Product1.jpg",
        price:100,
        quantity:2,
        totalPrice:200,
    };
    test("should render the OrderItems with correct props",()=>{
        render(<OrderItems {...props}/>)
        const titleElement=screen.getByText(props.title);
        const imageElement=screen.getByAltText(props.image);
        const priceElement=screen.getByText(`₹${props.price}`);
        const quantityElement=screen.getByText(`Quantity:${props.quantity}`);
        const totalPriceElement=screen.getByText(`Total:₹${props.totalPrice}`)

        expect(titleElement).toBeInTheDocument()
        expect(imageElement).toBeInTheDocument()
        expect(priceElement).toBeInTheDocument()
        expect(quantityElement).toBeInTheDocument()
        expect(totalPriceElement).toBeInTheDocument()
    })
})