import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivetRoute = ({children}) => {
 
let {isAuth}=useSelector((store)=>store.loginReducer)
console.log(isAuth)

return isAuth ? children : <Navigate to='/login'/>

}

export default PrivetRoute