/** @format */

import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Conponents/Context/AuthContext";

const Login = () => {
  let { isAuth ,setIsAuth } = useContext(AuthContext);

  return (
    <div>
      <h1>Login page</h1>
      <button onClick={() => setIsAuth(true)}>Login</button>

      {isAuth && <Navigate to='/' />}
    </div>
  );
};

export default Login;
