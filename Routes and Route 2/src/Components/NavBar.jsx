import React from 'react'
import { Link ,NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../Context/ContextAuth'
import SearchParam from './SearchParam'
import './NavBar.css';


const NavBar = () => {

  let {isAuth}=useContext(AuthContext)

  return (
    <div style={{display:'flex',justifyContent:'space-around'}}>
      <h3 >Is Auth: {isAuth?'Yes':'No'}</h3>
      <NavLink className="Navlink" to='/'><h3>Home</h3></NavLink>
      <NavLink className="Navlink" to='/login'><h3>Login</h3></NavLink>
      <NavLink className="Navlink" to='/product'><h3>Product</h3></NavLink>
      <NavLink className="Navlink" to='/users'><h3>Users</h3></NavLink>
      <NavLink className="Navlink" to='/search'><h3>search params</h3></NavLink>
    </div>
  )
}

export default NavBar