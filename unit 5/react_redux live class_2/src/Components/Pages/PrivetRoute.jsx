
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router';
import Login from '../Login/Login';

const PrivetRoute = ({children}) => {

    let {isAuth}=useSelector((store)=>store.login);
    

  return !isAuth ? <Navigate to='/login'/> :children
}

export default PrivetRoute