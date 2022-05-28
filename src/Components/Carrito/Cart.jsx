import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './Cart.module.css'
import Items from './Items';

const Cart = () => {
    const local = JSON.parse(localStorage.getItem("carrito"))

    return (
        <div className={style.container}>
            <Link to='/home'><button type='button'>BACK</button></Link>
            <div className={style.products}>
                <div>
                    <h1>PRODUCTOS</h1>
                </div>
                <div className={style.list}>
                {local.map(item => <Items 
                                    name={item.name}
                                    id={item.id}
                                    img={item.img}
                                    price={item.price}
                                    />)}
                </div>
            </div>
        </div>
    );
}

export default Cart;
