import { render, screen } from "@testing-library/react"
import Home from "./Home"

jest.mock("../Products/Products",()=>()=><div data-testid="products-component">Mocked Products Component</div>)

describe("Home Component",()=>{
    test("should render the products component",()=>{
        render(<Home/>)
        const productsComponent=screen.getByTestId("products-component")
        expect(productsComponent).toBeInTheDocument()
    })
})