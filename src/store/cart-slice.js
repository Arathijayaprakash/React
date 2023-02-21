import { createSlice } from "@reduxjs/toolkit";

const initialState={
  cartItems:localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[],
  cartTotalQuantity:0,
  cartTotalAmount:0
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
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
      localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
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
      localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      state.cartTotalQuantity = state.cartTotalQuantity - existingItem.quantity;
      state.cartTotalAmount = state.cartTotalAmount - existingItem.totalPrice;
      localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
    },
    clearCart(state){
      state.cartItems=[]
      state.cartTotalAmount=0
      state.cartTotalQuantity=0
    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
