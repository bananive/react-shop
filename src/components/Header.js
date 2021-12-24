import React, { useContext } from 'react';
import {ShopContext} from '../App';
import * as Scroll from 'react-scroll';

export const Header = () => {

    const context = useContext(ShopContext);
    let Link      = Scroll.Link;

    return (
        <header className='header'>
            <div className='container'>
                <span className='logo'>Shop</span>
                <nav className="nav">
                    <Link activeClass="active" to="shoplist" spy={true} offset={80} smooth={true} duration={500}>
                        Shoplist
                    </Link>
                    <Link activeClass="active" to="about" spy={true} offset={80} smooth={true} duration={500}>
                        About
                    </Link>
                    <Link activeClass="active" to="contact" spy={true} offset={80} smooth={true} duration={500}>
                        Contact
                    </Link>
                </nav>
                <div className='cart'>Items in cart: <strong>{context.cart.length}</strong></div>
            </div>
        </header>
    )
}
