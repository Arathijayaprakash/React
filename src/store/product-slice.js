import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: { products: [] },
  reducers: {
    fetchProducts(state) {
      fetch(
        "https://ebeautyapp-55c72-default-rtdb.firebaseio.com/products.json"
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          for (const key in data) {
            state.products.push({
              id: key,
              title: data[key].title,
              price: data[key].price,
              category: data[key].category,
              image: data[key].image,
            });
          }
        });
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
