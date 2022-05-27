import React, {useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams,Link } from 'react-router-dom';
import { getBook } from '../../../Redux/actions';
import style from './Details.module.css';
import spinner from '../../../Extras/spinner.gif'

const Details = () => {
    const params = useParams()
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBook(params.id))
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [dispatch])

    const book = useSelector(state => state.book)
    
    return (
        <div className={style.container}>
                <Link to='/home'><button type='button'>BACK</button></Link>
            {loading ? <img src={spinner} id={style.spinner} /> : <><div className={style.image}>
                <img src={book.volumeInfo && book.volumeInfo.imageLinks.thumbnail} alt="" />
            </div>
            <div className={style.data}>
                <div>
                    <h1>{book.volumeInfo?.title}</h1>
                </div>
                <div className={style.description}>
                    <p>{book.volumeInfo?.description ? book.volumeInfo?.description : 'SIN DESCRIPCIÓN' }</p>
                </div>
                <div className={style.info}>
                    <h3>Author <span>{book.volumeInfo?.authors?.[0]}</span></h3>
                    <h3>Editorial <span>{book.volumeInfo?.publisher}</span></h3>
                    <h3><span>{book.saleInfo?.listPrice ? `$ ${book.saleInfo?.listPrice.amount}` : 'NOT PRICE'}</span></h3>
                </div>
            </div></>}
        </div>
    );
}

export default Details;
