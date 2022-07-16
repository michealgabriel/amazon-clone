
import cartReducer from './reducers/cart.reducer';
import authReducer from './reducers/auth.reducer';

const rootReducer = {
    cart: cartReducer,
    auth: authReducer,
}

export default rootReducer;