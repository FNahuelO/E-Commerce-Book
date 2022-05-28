import React, { useState, useEffect } from 'react';
import style from './Login.module.css'
import {useNavigate} from 'react-router'
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/authContext';


const Login = () => {
    const [login, setLogin] = useState({emailLogin: '',passwordLogin:'' })
    const [register, setRegister] = useState({name: '',email: '',password:'',passwordConfirm: ''})
    const [errorMessage, setErrorMessage] = useState()
    const [active, setActive] = useState(false)

    const navigate = useNavigate()

    const { signUp, logIn } = useAuth()

    const handleChange = (e) => {
        if(e.target.name.includes('Login')){
            setLogin({
                ...login,
                [e.target.name] : e.target.value
            })
        } else {
            setRegister({
                ...register,
                [e.target.name] : e.target.value
            })
        }
    }

    const handleClick = (e) => {
        e.target.innerHTML.includes('Iniciar') ? setActive(false) : setActive(true)
    }
    
    const reset = () => {
        setLogin({
            emailLogin: '',
            passwordLogin: ''
        })
        setRegister({
            name: '',
            email: '',
            password: '',
            passwordConfirm: ''  
        })
    }

     const handleSubmit = async (e) => {
        e.preventDefault();
        if(e.target.name === 'login'){
            try {
                await logIn(login.emailLogin, login.passwordLogin)
                navigate('/home')
            } catch (error) {
                setErrorMessage(error.message)
            }
        } else {
            try {
                await signUp(register)
                navigate('/home')
            } catch (error) {
                setErrorMessage(error.message)
            }
        }
    }

    return (
        <main>
            <Link to='/home'><button type='button'>BACK</button></Link>
            <div className={style.container}>
            <div className={style.containerBack}>
                <div className={style.backLogin}>
                    <h3>¿Ya tiene una cuenta?</h3>
                    <p>Inicia sesión para entrar a tu cuenta</p>
                    <button onClick={(e) => handleClick(e)}>Iniciar Sesión</button>
                </div>
                <div className={style.backRegister}>
                    <h3>¿Aún no tiene una cuenta?</h3>
                    <p>Regístrate para que puedas iniciar sesión</p>
                    <button onClick={(e) => handleClick(e)}>Registrarse</button>
                </div>
            </div>
            <div className={style.containerFront}>
                <form className={active ? `${style.formLogin} ${style.active}` : style.formLogin} name='login' onSubmit={e => handleSubmit(e)}>
                    <h2>Iniciar Sesion</h2>
                    <input type="text" name="emailLogin" placeholder='Correo Electronico' value={login.emailLogin} onChange={e => handleChange(e)}/>
                    <input type="password" name="passwordLogin" placeholder='Contraseña' value={login.passwordLogin} onChange={e => handleChange(e)} />
                    <button>Login</button>
                </form>
                <form className={active ? `${style.formRegister} ${style.active}` : style.formRegister} onSubmit={e => handleSubmit(e)}>
                    <h2>Regístrarse</h2>
                    <input type="text" name="name" placeholder='Nombre Completo' value={register.name} onChange={(e => handleChange(e))}/>
                    <input type="text" name="email" placeholder='Correo Electronico' value={register.mail} onChange={(e => handleChange(e))} />
                    <input type="password" name="password" placeholder='Contraseña' value={register.password} onChange={(e => handleChange(e))}/>
                    <input type="password" name="passwordConfirm" placeholder='Confirmar Contraseña' value={register.passwordConfirm} onChange={(e => handleChange(e))}/>
                    <button>Regístrarse</button>
                </form>
            </div>

        </div>
        </main>
    );
}

export default Login;
