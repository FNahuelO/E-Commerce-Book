import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../Redux/actions';
import style from './Items.module.css'

const Items = ({name,id, img, price}) => {
    const [count , setCount] = useState(1)
    const dispatch = useDispatch()

    const handleClick = (e) => {
        if(e.target.innerHTML === '+'){
            setCount(count + 1)
        } else {
            setCount(count - 1)
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        setCount(Number(e.target.value))
    }
    return (
        <div className={style.container}>
            <button onClick={() => dispatch(removeBook(id))}>X</button>
            <div className={style.portada}>
                <img src={img} />
            </div>
            <div className={style.info}>
                <h2>{name}</h2>
            </div>
            <div className={style.stock}>
                <button type='button' onClick={e => handleClick(e)}>+</button>
                <input type='text' value={count} id={style.count} onChange={e => handleChange(e)}/>
                <button type='button' onClick={e => handleClick(e)}>-</button>
            </div>
        </div>
    );
}

export default Items;
