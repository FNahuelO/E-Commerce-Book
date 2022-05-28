import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCart } from '../../../Redux/actions';
import style from './Card.module.css';

function Card(props) {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(addCart({
      name: props.name,
      id: props.id,
      img: props.img,
      price: props.price
    }))
  }

  return (
    <div className={style.container}>
        <Link to={`/book/${props.id}`}><img src={props.img} alt='Portada'/></Link>
        <div className={style.data}>
          <Link to={`/book/${props.id}`}><h2>{props.title}</h2></Link>
          <h4>{props.author}</h4>
          <h5>{props.price}</h5>
          {props.price !== 'NOT PRICE' ? <button type='button' onClick={() => handleClick()}>ADD</button> : <button type='button' disabled onClick={() => handleClick()}>ADD</button>}
        </div>
    </div>
  )
}

export default Card