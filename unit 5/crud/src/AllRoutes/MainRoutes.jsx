import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Admin from '../pages/Admin'
import PrivetRoute from './PrivetRoute'
import SingleProductPage from '../pages/SingleProductPage'
import EditProduct from '../pages/EditProduct'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/admin' element={ <PrivetRoute> <Admin/> </PrivetRoute>}/>
            <Route path='/porducts/:id' element={<SingleProductPage/>}/>
            <Route path='/products/:id/edit' element={ <EditProduct/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRoutes