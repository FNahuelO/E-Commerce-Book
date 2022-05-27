import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';

function Card(props) {
  return (
    <div className={style.container}>
        <Link to={`/book/${props.id}`}><img src={props.img} alt='bandera'/></Link>
        <Link to={`/book/${props.id}`}><h3>{props.title}</h3></Link>
        <h4>{props.author}</h4>
        <h4>{props.editorial}</h4>
        <h5>{props.price}</h5>
    </div>
  )
}

export default Card