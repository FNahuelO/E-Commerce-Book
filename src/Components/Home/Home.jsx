import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../Redux/actions';
import Books from '../Books/Books';
import style from './Home.module.css'

const Home = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const books = useSelector(state => state.books)


    const handleChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(getBooks(search))
        }

    return (
        <div className=''>
            <div className={style.nav}>
                <form className={style.form} onSubmit={e => handleSubmit(e)}>
                    <input className={style.search} type='text' placeholder='Search book' onChange={e => handleChange(e)}/>
                    <button type='submit'>Search</button>
                </form>
            </div>
            <div className={style.container}>
                <div>
                    NAV
                </div>
                <div className={style.containerBooks}>
                    <Books books={books}/>
                </div>
            </div>
        </div>
    );
}

export default Home;
