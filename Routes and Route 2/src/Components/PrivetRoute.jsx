import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/ContextAuth'
import { Link ,Navigate } from 'react-router-dom'


const PrivetRoute = ({children}) => {
    let {isAuth}=useContext(AuthContext)

// console.log(isAuth)

 return !isAuth?<Navigate to='/login'/>: children
  
}

export default PrivetRoute