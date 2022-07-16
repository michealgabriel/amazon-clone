import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutProduct from '../Checkout/CheckoutProduct/CheckoutProduct';
import './Payment.css';

function Payment() {

    // const elements = useElements();
    
    // Get data from Redux Store
    const cartState = useSelector((state) => state["cart"] );
    const cartItems = cartState.cartData;
    
    const authState = useSelector((state) => state["auth"] );
    const authData = authState.authData;

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const cartTotal = cartItems.reduce((acc, curr) => curr.productPrice + acc, 0);

    
    const [succeeded, setSucceeded] = useState(false);
    const [proccessing, setProccessing] = useState("");
    
    const handleSubmit = e => {
        //Stripe stuffs
    }

    const handleChange = event => {
        //listen for changes in card element
        // and display any errors discovered on input
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

  return (
    <div className='payment'>
        
        <div className='payment__container'>

            <h1>
                Checkout ({<Link to="/checkout">{cartItems?.length}</Link>}) items
            </h1>

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{authData?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>
            

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment__items'>
            
                    {cartItems.map(item => {
                        return <CheckoutProduct id={item.productId} title={item.productTitle} image={item.productImage} price={item.productPrice} rating={item.productRating} />
                        })
                    }
            
                </div>
            </div>

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>
                    <form onSubmit={handleSubmit}>

                        <div className='payment__priceContainer'>
                            <NumberFormat
                            value={cartTotal}
                            displayType="text"
                            thousandSeparator={true}
                            decimalScale={3}
                            prefix=" $"
                            renderText={(value) => (
                                <h3>Order Total: {value}</h3>
                            )}
                            />
                            <button disabled={proccessing || disabled || succeeded}>
                                <span>
                                    {proccessing ? <p>Proccessing</p> : "Buy Now"}
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Payment