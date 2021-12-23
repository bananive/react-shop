import React, { useContext } from 'react';
import {ShopContext} from '../App';

export const Product = ({product}) => {

    const context = useContext(ShopContext);

    const addToCart = () => {
        context.addProduct(product);
    }

    return (
        <div className='product'>
            <img src={product.thumbnailUrl} alt={product.title}/>
            <h4>{product.title}</h4>
            <button type='button' onClick={addToCart}>Add to cart</button>
        </div>
    )
}
