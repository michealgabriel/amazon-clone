import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import Subtotal from './Subtotal/Subtotal';

function Checkout() {
  
    // Get data from Redux Store
    const cartState = useSelector((state) => state["cart"] );
    const cartItems = cartState.cartData;

    const authState = useSelector((state) => state["auth"]);
    const authData = authState.authData;

  return (
    <div className='checkout'>

        <div className='checkout__left'>
            <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg" alt=""/>

            <div className='checkout__title'>
                <h2>Shopping Cart</h2>
            </div>

            {cartItems.map(item => {
              return <CheckoutProduct id={item.productId} title={item.productTitle} image={item.productImage} price={item.productPrice} rating={item.productRating} />
              })
            }
            
        </div>

        <div className='checkout__right'>
            <Subtotal />

            <div className='checkout__right__products'>
            <h3>Sponsored Products</h3>
            <ProductCard id={5} title='Acer Nitro 5 AN517-54-79L1 Gaming Laptop | 17.3" FHD 144Hz IPS |' price={479.99} image="https://s3-us-west-2.amazonaws.com/hypebeast-wordpress/image/2009/07/huf-converse-product-red-skidgrip-1.jpg" rating={3}/>

            <ProductCard id={6} title='ZOTAC Gaming GeForce RTX 3060 Twin E4.5 out of 5 stars 1,275' price={834.99} image="https://media.premiumtimesng.com/wp-content/files/2020/07/Bama-Bottle-with-Quality-seal-KV-e1596119049484.jpg" rating={4}/>
            </div>
        </div>
        
    </div>
  )
}

export default Checkout