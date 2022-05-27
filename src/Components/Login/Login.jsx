import axios from 'axios';
import React, { useState } from 'react';
import style from './Login.module.css'

const Login = () => {
    const [login, setLogin] = useState({
        mailLogin: '',
        passwordLogin:''
    })
    const [register, setRegister] = useState({
        name: '',
        username: '',
        mail: '',
        password: '',
        passwordConfirm: ''
    })
    const [active, setActive] = useState(false)

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(e.target.name === 'login'){
            await axios.post('', login);
        } else {
            await axios.post('',register)
        }
    }

    return (
        <main>
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
                    <input type="text" name="mailLogin" placeholder='Correo Electronico' value={login.mail} onChange={e => handleChange(e)}/>
                    <input type="password" name="passwordLogin" placeholder='Contraseña' value={login.password} onChange={e => handleChange(e)} />
                    <button>Login</button>
                </form>
                <form className={active ? `${style.formRegister} ${style.active}` : style.formRegister}>
                    <h2>Regístrarse</h2>
                    <input type="text" name="name" placeholder='Nombre Completo' value={register.name} onChange={(e => handleChange(e))}/>
                    <input type="text" name="username" placeholder='Usuario' value={register.username} onChange={(e => handleChange(e))}/>
                    <input type="text" name="mail" placeholder='Correo Electronico' value={register.mail} onChange={(e => handleChange(e))} />
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
