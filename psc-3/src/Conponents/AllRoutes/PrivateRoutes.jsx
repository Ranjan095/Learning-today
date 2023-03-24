
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

import React from 'react'

const PrivateRoutes = ({children}) => {

    let {isAuth}=useContext(AuthContext);

  return !isAuth ? <Navigate to='/login'/>:children; 
}

export default PrivateRoutes