import * as React from "react";
import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Modal } from "@mui/material";
import ModalAddProducts from "./ModalAddProducts";
import { redirect } from "react-router-dom";
import classes from "./Admin.module.css";


const Admin = () => {
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

    const proceed=window.confirm('Are you sure?')

    if(proceed){
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

  const [open, setOpen] = React.useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
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
            <TableCell>Id</TableCell>
            <TableCell align="right">Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <p className={classes.loading}>Loading...</p>
          ) : (
            products.map((product) => (
              <TableRow
                key={product.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.id}
                </TableCell>
                <TableCell align="right">{product.title}</TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">{product.category}</TableCell>
                <TableCell align="right">{product.image}</TableCell>
                <TableCell align="right">
                  
                  <Button
                    color="error"
                    onClick={() => onDeleteHandler(product.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <Modal open={open} onClose={handleCloseModal}>
        <ModalAddProducts />
      </Modal>
    </TableContainer>
  );
};

export default Admin;
