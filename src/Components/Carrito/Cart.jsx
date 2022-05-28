import React from 'react';
import { useSelector } from 'react-redux';
import style from './Cart.module.css'
import Items from './Items';

const Cart = () => {
    const carrito = useSelector(state => state.carrito)
    return (
        <div className={style.container}>
            <div className={style.products}>
                {carrito.map(item => <Items 
                                    name={item.name}
                                    img={item.img}
                                    price={item.price}
                                    />)}
            </div>
            <div className={style.review}>
                REVIEW
            </div>
        </div>
    );
}

export default Cart;
