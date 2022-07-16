import React from 'react';
import './CheckoutProduct.css';
import { deleteFromCart } from '../../../redux/reducers/cart.reducer';
import { useDispatch } from 'react-redux';

function CheckoutProduct({ id, title, price, image, rating }) {

    // create dispatch to manipulate data to Redux Store
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(deleteFromCart(id));
    }

  return (
    <div className='checkoutProduct'>

        <img className='checkoutProduct__image' src={image} alt='' />

        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>

            <p className='checkoutProduct__price'>
                <small>$</small>
                <small>{price}</small>
            </p>

            <div className='checkoutProduct__rating'>
                {Array(rating).fill().map((_, i) => {
                    return <p>⭐</p>
                })}
            </div>

            <button onClick={removeFromCart}>Remove from cart</button>
        </div>

    </div>
  )
}

export default CheckoutProduct