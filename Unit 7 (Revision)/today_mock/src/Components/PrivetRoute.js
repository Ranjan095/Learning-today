import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivetRoute = ({children}) => {
 
  let isAuth =localStorage.getItem("isAut")
// console.log(isAuth)
return isAuth ? children : <Navigate to={"/login"}/>
}
