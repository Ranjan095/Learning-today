import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashbord } from './Page/Dashbord'
import { LoginPage } from './Page/LoginPage'
import { SignUp } from './Page/SignUp'
import { PrivetRoute } from './PrivetRoute'

export const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<PrivetRoute><Dashbord/></PrivetRoute>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignUp/>}/>
           
        </Routes>
    </div>
  )
}
