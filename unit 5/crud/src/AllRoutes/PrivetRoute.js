import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivetRoute = ({children}) => {
    let location=useLocation();
    console.log(location)
 
let {isAuth}=useSelector((store)=>store.loginReducer)
// console.log(isAuth)

return isAuth ? children : <Navigate to='/login' state={location.pathname} replace={true}/>

}

export default PrivetRoute