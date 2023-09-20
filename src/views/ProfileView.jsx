import React, { memo, useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import profile from '../assets/profile.jpg';
import './profile.css'
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../store/userReducer';

export const ProfileView = () => {




  return (
    <div className="container">
      <div className="row detail-profile">
        <div className="col-2 image">
          <div className="imagen-circular">
            <img src={profile} alt="Mi Imagen" />
          </div>
        </div>
        <div className="col-md-6 detail">
          <div className="row">
            <div className="col-6 d-flex justify-content-between">
              <p>nicorubio96</p>
              <button type="button" className="btn btn-secondary">editar</button>
              <button type='button' className='btn btn-secondary'>archivos</button>

              <i className="bi bi-heart"></i>
            </div>
          </div>
          <div className="row">
            <div className="col-8 d-flex justify-content-between">
              <p><span >404</span>  publicaciones</p> <p><span>1184</span> seguidores</p>  <p><span>1852</span> seguidos</p>
            </div>
          </div>

          <div className="row">
            <div className="col-3">
              <p><span>Nicolas Rubio</span></p>
              <p>Las Cabras</p>
              <p>Developer 💻</p>
            </div>
          </div>

        </div>
      </div>
      <div className="row histories"></div>
      <div className="row post"></div>
    </div>


  );
};

