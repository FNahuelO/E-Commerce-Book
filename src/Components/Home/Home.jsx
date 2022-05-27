import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../Redux/actions';
import Books from '../Books/Books';
import style from './Home.module.css'
import user from '../../Extras/icons8-user-64.png'
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
            <nav className={style.nav}>
                <div className={style.logo}>
                    <img src='' alt="" />
                </div>
                <form className={style.form} onSubmit={e => handleSubmit(e)}>
                    <input className={style.search} type='text' placeholder='Search' onChange={e => handleChange(e)}/>
                    <button type='submit'>Search</button>
                </form>
                <div className={style.user}>
                    <div id={style.login}>
                        <img src={user} alt="" />
                        <Link to='/login'><span>INICIAR SESIÓN | REGISTRARME </span></Link>
                    </div>
                    <div>
                        CART
                    </div>
                </div>
            </nav>
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
