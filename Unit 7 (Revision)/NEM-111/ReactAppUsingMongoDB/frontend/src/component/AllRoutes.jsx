import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../page/Login'
import { Signup } from '../page/Signup'
import { Notes } from '../page/Notes'
import { Home } from '../page/Home'
import CreateNote from '../page/CreateNote'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/notes' element={<Notes/>}/>
            <Route path='/createNote' element={<CreateNote/>}/>
        </Routes>
    </div>
  )
}
