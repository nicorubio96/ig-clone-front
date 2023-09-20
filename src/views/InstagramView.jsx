import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './flasby.css'
import { ProfileView } from './ProfileView'
import { styleLogoInsta } from '../utilities'

export const InstagramView = () => {
  return (

      <div className='row'>
        <div className='col-2'>
        <i className='logo' data-visualcompletion="css-img" aria-label="Instagram"  role="img"  style={styleLogoInsta} ></i>


          <ul>
            <div className='mt-5'>
              <NavLink to={'/'}>
              <i class="bi bi-house-door-fill"></i>


              </NavLink>


            </div>

            <div className='mt-5'>
              <NavLink to={'/'}>
              <i class="bi bi-search"></i>

              </NavLink>


            </div>






            <div className='mt-5'>
              <NavLink to={'/reels'}>
              <i class="bi bi-play-btn"></i>


              </NavLink>


            </div>

            <div className='mt-5'>
              <NavLink to={'/chat'}>
              <i class="bi bi-messenger"></i>

              </NavLink>

            </div>

            <div className='mt-5'>
              <NavLink to={'/notifications'}>
              <i class="bi bi-heart"></i>


              </NavLink>


            </div>

            <div className='mt-5'>
              <NavLink to={'/notifications'}>
              <i class="bi bi-plus-square"></i>


              </NavLink>


            </div>


          </ul>
        </div>

        <div className='col-8 content'>
          <Outlet />



        </div>

      </div>


 



  )
}
