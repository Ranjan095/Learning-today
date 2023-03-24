import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from '../../Pages/Home'
import Login from '../../Pages/Login'
import PageNotFound from '../../Pages/PageNotFound'
import Products from '../../Pages/Products'
import Register from '../../Pages/Register'
import SingleProductPage from '../../Pages/SingleProductPage'
import PrivateRoutes from './PrivateRoutes'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element= {<Home/>}></Route>
            <Route path='/login' element= {<Login/>}></Route>
            <Route path='/product' element= {<PrivateRoutes> <Products/></PrivateRoutes>}></Route>
            <Route path='/register' element= {<Register/>}></Route>
            <Route path='/product/:pro_id' element= {<SingleProductPage/>}></Route>
            <Route path='*' element= {<PageNotFound/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes