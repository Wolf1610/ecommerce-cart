import { configureStore } from "@reduxjs/toolkit";

import cartSlice from '../reducer/cartSlice';
import productSlice from '../reducer/productSlice'; 

const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productSlice
    }
});

export default store;