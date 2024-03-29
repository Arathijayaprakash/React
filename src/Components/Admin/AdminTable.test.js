import React from "react";
import { render, screen } from "@testing-library/react";
import AdminTable from "./AdminTable";

jest.mock("@mui/material/Modal", () => ({ children, open, onClose }) => {
  return open ? <div>{children}</div> : null;
});

const products=[
    {
        id:1,
        image:"image.png",
        title:"Lipstick",
        price:890,
        category:'MakeUp'
    }
]
test("renders the table with pagination with buttons",()=>{
    const productsPerPage=1;
    const currentPage=1;

    const handleCloseEditModal=jest.fn();
    const handleCloseModal=jest.fn();
    const handleOpenEditModal=jest.fn();
    const handleOpenModal=jest.fn()
    const onDeleteHandler=jest.fn();
    const setCurrentPage=jest.fn()

    render(
        <AdminTable
            open={false}
            openEdit={false}
            handleCloseEditModal={handleCloseEditModal}
            handleCloseModal={handleCloseModal}
            handleOpenEditModal={handleOpenEditModal}
            handleOpenModal={handleOpenModal}
            onDeleteHandler={onDeleteHandler}
            isLoading={false}
            currentProducts={products}
            productsPerPage={productsPerPage}
            products={products}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        />      
    )
    const addProductsButton=screen.getByRole("button",{
        name:"Add Products",
    })
    expect(addProductsButton).toBeInTheDocument()

    const tableHeaders=screen.getAllByRole("columnheader");
    expect(tableHeaders).toHaveLength(6)

    const productsRow=screen.getAllByRole("row")
    expect(productsRow).toHaveLength(productsPerPage+1)

    // const paginationComponent=screen.getAllByRole("navigation");
    // expect(paginationComponent).toBeInTheDocument()
})