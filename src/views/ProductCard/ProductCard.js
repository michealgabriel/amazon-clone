
import React from 'react';
import { useDispatch } from 'react-redux';
import './ProductCard.css';
import { addToCart } from '../../redux/reducers/cart.reducer';

function ProductCard({ id, title, price, image, rating }) {

    // create dispatch to manipulate data to Redux Store
    const dispatch = useDispatch();

    const runAddToCart = () => {
        const dataForCart = {
            productId: id,
            productTitle: title,
            productPrice: price,
            productImage: image,
            productRating: rating
        }

        dispatch(addToCart(dataForCart));
    }

  return (
    <div className='product'>

        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating).fill().map((_, i) => {
                    return <p>⭐</p>
                })}
            </div>
        </div>


        <img className='product__image' src={image} alt='' />

        <button onClick={runAddToCart}>Add to Cart</button>

    </div>
  )
}

export default ProductCard;