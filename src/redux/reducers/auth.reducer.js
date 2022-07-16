
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authData: null,
};

let authSlice = createSlice({
    name: 'auth_status',
    initialState: initialState,
    reducers: {
        setAuthData: (state, action) => {
            state.authData = action.payload;
            console.log(state.authData);
        },
    }
});

export const {setAuthData} = authSlice.actions;
export default authSlice.reducer;