import * as React from "react";
import { useEffect } from "react";
import { redirect } from "react-router-dom";
import AdminTable from "./AdminTable";

const Admin = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const productsPerPage = 2;
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const fetchProducts = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://ebeautyapp-55c72-default-rtdb.firebaseio.com/products.json"
    );

    const data = await response.json();
    const loadedProducts = [];
    for (const key in data) {
      loadedProducts.push({
        id: key,
        title: data[key].title,
        price: data[key].price,
        category: data[key].category,
        image: data[key].image,
      });
    }
    setProducts(loadedProducts);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const onDeleteHandler = async (id) => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      const response = fetch(
        `https://ebeautyapp-55c72-default-rtdb.firebaseio.com/products/${id}.json`,
        { method: "DELETE" }
      );
      if (!response.ok) {
        console.log("Error while deleting");
      }
      fetchProducts();
      return redirect("/adminHome");
    }
  };

  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEditModal = () => {
    setOpenEdit(true);
  };
  const handleCloseEditModal = () => {
    setOpenEdit(false);
  };

  const onEditHandler = async (id) => {
    handleOpenEditModal();
  };

  const [open, setOpen] = React.useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <AdminTable
        isLoading={isLoading}
        onDeleteHandler={onDeleteHandler}
        onEditHandler={onEditHandler}
        open={open}
        openEdit={openEdit}
        handleOpenEditModal={handleOpenEditModal}
        handleCloseEditModal={handleCloseEditModal}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        currentProducts={currentProducts}
        paginate={paginate}
        productsPerPage={productsPerPage}
        products={products}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Admin;
