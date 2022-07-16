
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartData: [],
};

let cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartData = [...state.cartData, action.payload];
            // console.log(action.payload);
            console.log(state.cartData);
        },
        deleteFromCart: (state, action) => {
            const index = state.cartData.findIndex(cartItem => cartItem.productId === action.payload);

            let newCart = [...state.cartData];

            console.log(index);
            console.log(action.payload);

            if(index !== -1){
                newCart.splice(index, 1);
            }else{
                console.warn('Cannot remove product that is not in Cart');
            }

            state.cartData = [...newCart];
        }
    }
});

export const {addToCart, deleteFromCart} = cartSlice.actions;
export default cartSlice.reducer;