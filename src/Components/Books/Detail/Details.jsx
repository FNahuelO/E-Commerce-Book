import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams,Link } from 'react-router-dom';
import { getBook } from '../../../Redux/actions';
import style from './Details.module.css';

const Details = () => {
    const params = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBook(params.id))
    }, [dispatch])

    const book = useSelector(state => state.book)
    /* function useRegex(input) {
        console.log(regex.test(input));
    } */
    const descripcion = book.volumeInfo?.description.replace(/[<>/]*/g, '')
    return (
        <div className={style.container}>
                <Link to='/home'><button type='button'>BACK</button></Link>
            <div className={style.image}>
                <img src={book.volumeInfo && book.volumeInfo.imageLinks.thumbnail} alt="" />
            </div>
            <div className={style.data}>
                <div>
                    <h1>{book.volumeInfo?.title}</h1>
                </div>
                <div className={style.description}>
                    <p>{descripcion}</p>
                </div>
                <div className={style.info}>
                    <h3>Author <span>{book.volumeInfo?.authors[0]}</span></h3>
                    <h3>Editorial <span>{book.volumeInfo?.publisher}</span></h3>
                    <h3><span>{book.saleInfo?.listPrice ? `$${book.saleInfo?.listPrice.amount}` : 'NOT PRICE'}</span></h3>
                </div>
            </div>
        </div>
    );
}

export default Details;
