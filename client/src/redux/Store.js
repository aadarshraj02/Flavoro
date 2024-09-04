import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CategorySlices from "./slices/CategorySlices";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlices,
  },
});

export default Store;
