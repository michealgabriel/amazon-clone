import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Home.css';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>

            <img 
            className='home__image'
            src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" alt=''/>

            <div className='home__productRow'>
                <ProductCard id={4} title='HP 17 Laptop PC, 11 Generation Intel Core, 4 GB RAM, 256 GB SSD, UHD Graphics, 17.3" HD+ Display, Windows 11 Home, Wi-Fi' price={157.99} image="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL210_SR195,210_.jpg" rating={5}/>

                <ProductCard id={5} title='Acer Nitro 5 AN517-54-79L1 Gaming Laptop | 17.3" FHD 144Hz IPS Display |' price={479.99} image="https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UL320_.jpg" rating={3}/>

                <ProductCard id={6} title='ZOTAC Gaming GeForce RTX 3060 Twin Edge OC 12GB GDDR6 192-bit 15 Freeze Fan Stop ZT-A30600H-10M
4.5 out of 5 stars 1,275' price={834.99} image="https://m.media-amazon.com/images/I/7156DLyUsYL._AC_UL320_.jpg" rating={4}/>
            </div>

            <div className='home__productRow'>
                <ProductCard id={1} title='SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video, Brightest Display Screen, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Burgundy' price={299.99} image="https://m.media-amazon.com/images/I/71Wkk4n9olL._AC_UY218_.jpg" rating={3}/>
                
                <ProductCard id={2} title='TELL VISON M5 Series 32-Inch FHD 1080p Smart Monitor & Streaming TV (Tuner-Free), Netflix, HBO, Prime Video, & More, Apple Airplay, Height Adjustable Stand, Built-in Speakers (LS32AM502HNXZA)' price={479.99} image="https://m.media-amazon.com/images/I/81+uK5QM8+L._AC_UY218_.jpg" rating={1}/>
            </div>

            <div className='home__productRow'>
                <ProductCard id={4} title='HP 17 Laptop PC, 11 Generation Intel Core, 4 GB RAM, 256 GB SSD, UHD Graphics, 17.3" HD+ Display, Windows 11 Home, Wi-Fi' price={157.99} image="https://m.media-amazon.com/images/I/81VZGpB+RrL._AC_UL320_.jpg" rating={5}/>

                <ProductCard id={5} title='Acer Nitro 5 AN517-54-79L1 Gaming Laptop Laptop GPU | 17.3" FHD 144Hz IPS Display |' price={479.99} image="https://m.media-amazon.com/images/I/81Ivn5DIxhL._AC_UL320_.jpg" rating={3}/>

                <ProductCard id={6} title='Heartbeat of a Gamer 2 Adult Hooded Sweatshirt' price={834.99} image="https://m.media-amazon.com/images/I/616PbyOB4dL._AC_UL320_.jpg" rating={4}/>
            </div>

        </div>
    </div>
  )
}

export default Home