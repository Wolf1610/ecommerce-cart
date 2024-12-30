import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },

        remove(state, action) {
            return state.filter(item => item.id !== action.payload);
        }
    }
});

export const { add, remove } = cartSlice.actions; // it exports the add action
export default cartSlice.reducer; // it exports the state via reducer