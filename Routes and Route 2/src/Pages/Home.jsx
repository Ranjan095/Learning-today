import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/ContextAuth'

const Home = () => {

  let { isAuth,login,logOut }=useContext(AuthContext);

  return (
    <div>
      <h1>Home Page</h1>
      <button disabled={!isAuth} onClick={()=>logOut()}>Logout</button>
      </div>
  )
}

export default Home