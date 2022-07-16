import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase';
import { setAuthData } from '../../redux/reducers/auth.reducer';

function Header() {
    
    // Get data from Redux Store
    const cartState = useSelector((state) => state["cart"] );
    const cartItems = cartState.cartData;
    
    const authState = useSelector((state) => state["auth"] );
    const authData = authState.authData;

    console.log(authData);

    // create dispatch to manipulate data to Redux Store
    const dispatch = useDispatch();

    const handleAuth = () => {
        if(authData){
            console.log(authData);
            // if user has auth data -> Log out
            auth.signOut();
            dispatch(setAuthData(null));
        }
    }

  return (
    <div className='appHeader'>
        <div className='header'>

            <Link to="/">
            <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=''/>
            </Link>

            <div className='header__option'>
                    <span className='header__optionLine1'>Deliver to</span>
                    <span className='header__optionLine2'> Nigeria</span>
            </div>

            <div className='header__search'>
                <input type="text" className="header__searchInput" />
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className='header__nav'>
                <Link to={!authData && '/login'} className="nav__link">
                <div onClick={handleAuth} className='header__option'>
                    <span className='header__optionLine1'>{ authData ? authData?.email : 'Hello Guest' }</span>
                    <span className='header__optionLine2'>{ authData ? 'Sign Out' : 'Sign In' }</span>
                </div>
                </Link>
                
                <div className='header__option'>
                    <span className='header__optionLine1'>Return</span>
                    <span className='header__optionLine2'>& Orders</span>
                </div>

                <Link to="/checkout">
                <div className='header__optionBasket'>
                    <ShoppingCartOutlinedIcon />
                    <span className='header__optionLine2 header__basketCount'>{cartItems?.length}</span>
                </div>
                </Link>
            </div>

        </div>


        <div className='sub__header'>
            <div className='sub__header__item'>
                <MenuOutlinedIcon/><span>All</span>
            </div>
            <div className='sub__header__item'>
                <span>Today's Deal</span>
            </div>
            <div className='sub__header__item'>
                <span>Customer Service</span>
            </div>
            <div className='sub__header__item'>
                <span>Registry</span>
            </div>
            <div className='sub__header__item'>
                <span>Gift Cards</span>
            </div>
            <div className='sub__header__item'>
                <span>Sell</span>
            </div>
        </div>


    </div>
  )
}

export default Header