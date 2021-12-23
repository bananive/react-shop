import { useState, useEffect } from 'react';
import { Product } from './Product';

export const Shoplist = () => {

    const [shopData, setShopData ] = useState([]);
    const someState = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json()).then( data => {
            setShopData(data.slice(0, 20));
        });
    }, []);

    return (
        <div className='container list'>
            {
                shopData.map( el => <Product key={el.id} product={el} /> )
            }
        </div>
    )
}
