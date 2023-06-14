import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Modal } from "@mui/material";
import ModalAddProducts from "./ModalAddProducts";
import ModalEditProducts from "./ModalEditProducts";
import classes from "./Admin.module.css";
import Pagination from "../Products/Pagination";
import { DeleteForeverSharp, Edit } from "@mui/icons-material";
import { useState } from "react";

const AdminTable = ({
  handleCloseEditModal,
  handleOpenEditModal,
  handleOpenModal,
  isLoading,
  currentProducts,
  onDeleteHandler,
  productsPerPage,
  products,
  setCurrentPage,
  currentPage,
  open,
  openEdit,
  handleCloseModal,
}) => {
  const [editProductId, setEditProductId] = useState("");
  const onEditHandler = (productId) => {
    setEditProductId(productId);
    handleOpenEditModal();
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <TableContainer component={Paper}>
      <div className={classes.add}>
        <Button color="info" variant="contained" onClick={handleOpenModal}>
          Add Products
        </Button>
      </div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id </TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Category</TableCell>

            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <p className={classes.loading}>Loading...</p>
          ) : (
            currentProducts.map((product) => (
              <TableRow
                key={product.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.id}
                </TableCell>
                <TableCell align="right">
                  <img
                    src={product.image}
                    width="150"
                    alt={product.image}
                  ></img>
                </TableCell>
                <TableCell align="right">{product.title}</TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">{product.category}</TableCell>

                <TableCell align="right">
                  <Button
                    color="error"
                    onClick={() => onDeleteHandler(product.id)}
                  >
                    <DeleteForeverSharp />
                  </Button>
                  <Button
                    color="inherit"
                    onClick={() => onEditHandler(product.id)}
                  >
                    <Edit />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Table>
      <Modal open={open} onClose={handleCloseModal}>
        <ModalAddProducts />
      </Modal>
      <Modal open={openEdit} onClose={handleCloseEditModal}>
        <ModalEditProducts handleCloseEditModal={handleCloseEditModal}
          theProducts={currentProducts.find(
            (product) => product.id === editProductId
          )}
        />
      </Modal>
    </TableContainer>
  );
};

export default AdminTable;
