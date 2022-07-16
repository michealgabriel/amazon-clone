import React from 'react';
import NumberFormat from 'react-number-format';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Subtotal.css';
function Subtotal() {

    const navigate = useNavigate();
    // Get data from Redux Store
    const cartState = useSelector((state) => state["cart"] );
    const cartItems = cartState.cartData;

    const cartTotal = cartItems.reduce((acc, curr) => curr.productPrice + acc, 0);

    const goToPaymentPage = () => {
        navigate('/payment');
    }

  return (
    <div className='subtotal'>

        <NumberFormat
        value={cartTotal}
        displayType="text"
        thousandSeparator={true}
        decimalScale={3}
        prefix=" $"
        renderText={(value) => (
            <>
                <p>Subtotal ({cartItems?.length} items): 
                <strong>{value}</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type='checkbox' /> This order contains a gift
                </small>
            </>
        )}
        />

        <button onClick={e => goToPaymentPage()}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal