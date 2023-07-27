import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";
import productSlice from "./product-slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    product: productSlice.reducer,
  })
);
const middleware=[
  ...getDefaultMiddleware({
    serializableCheck:{
      ignoredActions:["persist/PERSIST",],
      ignoredPaths:["register"],
    }
  })
]
const store = configureStore({
  reducer: persistedReducer,
  middleware,
});
const persistor = persistStore(store);
export { store, persistor };
