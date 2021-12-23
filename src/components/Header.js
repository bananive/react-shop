import React, { useContext } from 'react';
import {ShopContext} from '../App';

export const Header = () => {

    const context = useContext(ShopContext);

    return (
        <header className='header'>
            <div className='container'>
                <span className='logo'>Shop</span>
                <div className='cart'>Items in cart: <strong>{context.cart.length}</strong></div>
            </div>
        </header>
    )
}
