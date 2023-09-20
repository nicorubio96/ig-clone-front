import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import { LoginView } from '../views/LoginView'
import { ProfileView } from '../views/ProfileView'
import { ChatView } from '../views/ChatView'
import { InicioView } from '../views/InicioView'
import { ImageForm } from '../views/ImageForn'
import { InstagramView } from '../views/InstagramView'
export const AppRoutes = () => {

  return (

    <Routes>

      <Route path='/' element={<InstagramView />}>
        <Route
          index
          element={<InicioView />}
        />

        <Route
          path='/profile'
          element={<ProfileView />}>


        </Route>

        <Route
          path='/chat'
          element={<ChatView />}
        />


      </Route>


      <Route path='/auth' element={<LoginView />} />
      <Route path='/register' element={<ImageForm/>}/>

    </Routes>


  )
}
