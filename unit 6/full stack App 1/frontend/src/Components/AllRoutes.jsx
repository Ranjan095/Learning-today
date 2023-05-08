import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Signup } from './Signup'
import { Login } from './Login'
import { Notes } from './Notes'
import { AddNote } from './AddNote'
import { EditNote } from './EditNotes'


export const AllRoutes = () => {
  return (
    <div>
          <Routes>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/notes' element={<Notes/>}/>
    <Route path='/addnote' element={<AddNote/>}/>
    <Route path='/editNote' element={<EditNote/>}/>
   </Routes>
    </div>
  )
}
