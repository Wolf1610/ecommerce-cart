import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusCode from "../utils/StatusCode";


const initialState = {
    data: [],   
    status: StatusCode.IDLE
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // method we create
        // fetchProducts(state, action){
        //     state.data = action.payload
        // }
    },
    // promise(during api call, fetch) returns 3 state, in order to show the current state of the components we are using thunk middleware, async operation with extra reducer(for used to show 3 states explicitly)
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.status = StatusCode.LOADING
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = StatusCode.IDLE
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = StatusCode.ERROR
            })
    }
});

const url = 'https://fakestoreapi.com/products'; 

export const getProducts = createAsyncThunk('products/get', async () =>     {
    const data = await fetch(url);
    const result = await data.json();
    return result;
})

// export function getProducts() {
//     return async function getProductsThunk(dispatch, getState){
//         const data = await fetch(url);
//         const result = await data.json();
//         dispatch(fetchProducts(result));
//     }
// }

export const { fetchProducts } = productSlice.actions; 
export default productSlice.reducer;