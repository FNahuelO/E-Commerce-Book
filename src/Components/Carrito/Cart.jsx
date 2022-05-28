import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart } from '../../Redux/actions';
import style from './Cart.module.css'
import Items from './Items';

const Cart = () => {
    const local = JSON.parse(localStorage.getItem("carrito"))
    const [products, setProducts] = useState(local);
    const dispatch = useDispatch()

    useEffect(() => {
        if(products.length === 0){
            dispatch(clearCart())
        }
    }, [products])

    const handleRemove = (id) => {
        const newProducts = products.filter(item => item.id !== id)
        setProducts(newProducts)
        localStorage.setItem('carrito', JSON.stringify(newProducts))
    }

    return (
        <div className={style.container}>
            <Link to='/'><button type='button'>BACK</button></Link>
            <div className={style.products}>
                <div>
                    <h1>PRODUCTOS</h1>
                </div>
                <div className={style.list}>
                {products.map(item => <Items 
                                    name={item.name}
                                    id={item.id}
                                    img={item.img}
                                    price={item.price}
                                    remove={handleRemove}
                                    />)}
                </div>
            </div>
        </div>
    );
}

export default Cart;
