import * as React from "react";
import { TextField, Button } from "@mui/material";
import { v4 as uuid } from 'uuid';


const ModalAddProducts = (props) => {
  
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [image, setImage] = React.useState("");
  const unique_id = uuid();
  const small_id = unique_id.slice(0,8)
  const onSetTitle = (e) => {
    setTitle(e.target.value);
  };
  const onSetPrice = (e) => {
    setPrice(e.target.value);
  };
  const onSetCategory = (e) => {
    setCategory(e.target.value);
  };
  const onSetImage = (e) => {
    setImage(e.target.value);
  };
  const id={small_id}
  async function onSubmitHandler(e) {
    e.preventDefault();
    const products = {
      id:id,
      title: title,
      price: price,
      category: category,
      image: image,
    };
    const response = fetch(
      "https://ebeautyapp-55c72-default-rtdb.firebaseio.com//products.json",
      {
        method: "POST",
        body: JSON.stringify(products),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
   
      const data= response.json()
      alert("Product Added SuccessFully")
      
      console.log(data)
    
   
  }
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
        <h3>Enter Product Details</h3>
        <TextField
          id="standard-full-width"
          label="Add Product Title"
          style={{ margin: 8 }}
          onChange={onSetTitle}
          placeholder="Enter Product Title"
          fullWidth
          required
          defaultValue={props.title}
        />
        <TextField
          id="standard-full-width"
          label="Add Product Price"
          style={{ margin: 8 }}
          onChange={onSetPrice}
          placeholder="Enter Product Price"
          fullWidth
          required
          defaultValue={props.price}
        />
        <TextField
          id="standard-full-width"
          label="Add Product Category"
          style={{ margin: 8 }}
          onChange={onSetCategory}
          placeholder="Enter Product Category"
          fullWidth
          required
          defaultValue={props.category}
        />
        <TextField
          id="standard-full-width"
          label="Add URL of Product Image"
          style={{ margin: 8 }}
          onChange={onSetImage}
          placeholder="Enter URL of Product Imag"
          fullWidth
          required
          defaultValue={props.image}
        />

        <Button
          className="addbtn"
          type="submit"
          variant="contained"
          color="primary"
         
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default ModalAddProducts;
