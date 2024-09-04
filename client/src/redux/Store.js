import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CategorySlices from "./slices/CategorySlices";
import SearchSlices from "./slices/SearchSlices.jsx";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlices,
    search: SearchSlices,
  },
});

export default Store;
