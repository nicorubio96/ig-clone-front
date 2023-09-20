import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLogin } from '../store/userReducer'
import './login.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { styleLogoInsta } from '../utilities'


export const LoginView = () => {
    const navigate = useNavigate()
  


    const dispatch = useDispatch()

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const isLogin = () => {
        dispatch(fetchLogin(email, password))
        navigate('/')


    }

    const handleInputChangeEmail = (e) => {

        setEmail(e.target.value)
        console.log(email)


    }

    const handleInputChangePassword = (e) => {
        setPassword(e.target.value)
        console.log(password)
    }

    return (

        <div className="container">
            <div className="row  xx ">
                <div className="col-md-3 columna ">
                <i className='logo' data-visualcompletion="css-img" aria-label="Instagram"  role="img"  style={styleLogoInsta} ></i>
                    <form>
                        <div className='mt-5'>
                            <input className='form-control' placeholder='Telefono,usuario o correo electronico' />

                        </div>

                        <div className='mt-1'>
                            <input className='form-control' placeholder='Contraseña' />
                        </div>
 

                        <div style={{ textAlign: 'center' }}>
                            <hr style={{ width: '40%', display: 'inline-block', marginRight: '10px' }} />
                            <span style={{ fontSize: '24px' }}>O</span>
                            <hr style={{ width: '40%', display: 'inline-block', marginLeft: '10px' }} />
                        </div>

                    </form>

                    <div>
                        <i className="bi bi-facebook">Iniciar sesion con Facebook</i> 
                        <p>¿Has olvidado la contarseña?</p>
                        

                    </div>

                </div>
                .
            </div>

            <div className="row  register mt-2">
                <div className="col-md-3   columna">
                    <p id='register'>¿No tienes una cuenta?</p><NavLink to={'/register'}>Registrate</NavLink>

                </div>
            </div>

        </div>





    )
}



