
import { render,screen } from "@testing-library/react"
import PageContent from "./Dashboard"

jest.mock('../useFetch',()=>()=>{
    const Products=[
        {id:1,name:"product1"},
        {id:2,name:"product2"},
    ]
    const Users=[
        {id:1,name:'user1'},
        {id:1,name:'user2'}
    ]
    const Orders=[
        {id:1,orderNumber:'Order1'},
        {id:2,orderNumber:'Order2'}
    ]
    return [Products,Users,Orders]
})

describe("PageContent",()=>{
    test("should render the dashboard with correct data",()=>{
        render(<PageContent/>)
        
        expect(screen.getByText('Orders')).toBeInTheDocument()
        const productElements=screen.queryAllByText("Products")
        expect(productElements.length).toBeGreaterThan(0)
        const customers=screen.queryAllByText("Customers")
        expect(customers.length).toBeGreaterThan(0)
        expect(screen.getByText('Pie chart')).toBeInTheDocument()

    })
})