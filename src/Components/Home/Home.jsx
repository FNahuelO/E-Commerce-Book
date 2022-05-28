import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../Redux/actions';
import Books from '../Books/Books';
import style from './Home.module.css'
import user from '../../Extras/icons8-user-64.png'
import cart from '../../Extras/bag.png'
import { useAuth } from '../../Context/authContext';


const Home = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const books = useSelector(state => state.books)
    const { currentUser,logout } = useAuth()


    const handleChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const handleLogout = async() => {
        await logout()
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
                        {!currentUser ? <Link to='/login'><span>INICIAR SESIÓN</span></Link> : <span onClick={handleLogout}>CERRAR SESIÓN</span>}
                    </div>
                    <div className={style.cart}>
                        <Link to={'/carrito'}><img src={cart} /></Link>
                    </div>
                </div>
            </nav>
            <div className={style.container}>
                <div className={style.containerBooks}>
                    <Books books={books}/>
                </div>
            </div>
        </div>
    );
}

export default Home;
