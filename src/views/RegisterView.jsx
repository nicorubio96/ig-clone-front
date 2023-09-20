import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRegister } from '../store/userReducer'


export const RegisterView = () => {
    const dispatch =useDispatch()

    const [userData, setUserData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });

      
  const isRegister = () => {
    dispatch(fetchRegister(userData));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

    




  return (
    <div>
            <h1>Bienvenido, por favor register su usuario </h1>

            <form>
                <div className='mt-5' >
                    <input type='text' placeholder='username' name='username' value={userData.username} onChange={handleInputChange} />
                </div>

                <div className='mt-5'>
                    <input type='text' placeholder='firstName' name='firstName' value={userData.firstName} onChange={handleInputChange} />
                </div>

                <div className='mt-5'>
                    <input type='text' placeholder='lastName' name='lastName' value={userData.lastName} onChange={handleInputChange} />
                </div>
                <div className='mt-5'>
                    <input type='text' placeholder='email'name='email' value={userData.email} onChange={handleInputChange} />
                </div>
                <div className='mt-5'>
                    <input type='text' placeholder='password' name='password' value={userData.password} onChange={handleInputChange} />
                </div>
            </form>

            <button onClick={isRegister}>Ingresar</button>

        </div>
  )
}
