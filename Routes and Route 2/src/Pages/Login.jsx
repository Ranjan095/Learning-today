import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/ContextAuth'
import { Navigate } from 'react-router-dom'

const Login = () => {

  let { isAuth,login,logOut }=useContext(AuthContext);
  

  return (
    <div>
      <h1>Login page</h1>
      <button disabled={isAuth} onClick={()=>login()}>Login</button><br></br><br></br>
     {isAuth && <Navigate to='/'/>}
      </div>

  )
}

export default Login