import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [], cartTotalQuantity: 0, cartTotalAmount: 0 },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      state.cartTotalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      state.cartTotalAmount+=newItem.price;
    },
    removeFromCart(state, action) {
      const id = action.payload;

      const existingItem = state.cartItems.find((item) => item.id === id);
      state.cartTotalAmount = state.cartTotalAmount - existingItem.price;
      state.cartTotalQuantity--;
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      state.cartTotalQuantity = state.cartTotalQuantity - existingItem.quantity;
      state.cartTotalAmount = state.cartTotalAmount - existingItem.totalPrice;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
