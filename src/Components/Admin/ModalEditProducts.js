import * as React from "react";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const ModalEditProducts = ({ theProducts,handleCloseEditModal }) => {
  const [title, setTitle] = useState(theProducts.title || "");
  const [price, setPrice] = useState(theProducts.price || "");
  const [category, setCategory] = useState(theProducts.category || "");
  const [image, setImage] = useState(theProducts.image || "");
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const updatedProduct = {
      title,
      price,
      category,
      image,
    };
  try{  
 const response = await fetch(
      `https://ebeautyapp-55c72-default-rtdb.firebaseio.com/products/${theProducts.id}.json`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      }
    );
    if(response.ok){
      alert("Product updated successfully")
    }else{
      throw new Error("Failed to update product")
    }
  }catch(error){
    console.error("Error updating product:",error)
    alert("Failed to update product")
  }
    setTitle("");
    setPrice("");
    setCategory("");
    setImage(""); 
    handleCloseEditModal()
    window.location.reload()
    
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        marginLeft: "150px",
        marginTop: "50px",
        marginRight: "150px",
        padding: "10px",
        borderRadius: "10px",
        paddingLeft: "10px",
      }}
    >
      <form onSubmit={onSubmitHandler}>
        <h3>Edit Product Details</h3>
        <TextField
          id="standard-full-width"
          label="Add Product Title"
          style={{ margin: 8 }}
          placeholder="Enter Product Title"
          fullWidth
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          id="standard-full-width"
          label="Add Product Price"
          style={{ margin: 8 }}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter Product Price"
          fullWidth
          required
        />

        <FormControl fullWidth style={{ margin: 8 }}>
          <InputLabel required>Add Product Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Add Product Category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="MakeUp">MakeUp</MenuItem>
            <MenuItem value="Skin">Skin</MenuItem>
            <MenuItem value="Hair">Hair</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="standard-full-width"
          label="Add URL of Product Image"
          style={{ margin: 8 }}
          placeholder="Enter URL of Product Imag"
          fullWidth
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <Button
          className="addbtn"
          type="submit"
          variant="contained"
          color="primary"

        >
          Edit
        </Button>
      </form>
    </div>
  );
};

export default ModalEditProducts;
