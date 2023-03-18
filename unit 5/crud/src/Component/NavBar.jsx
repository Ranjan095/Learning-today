import React from 'react'
import './nav.css';
import { NavNavLink ,NavLink} from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='NavLink' >
        <NavLink className='nav' to="/">Home</NavLink>
        <NavLink className='nav' to="/login">Login</NavLink>
        <NavLink className='nav' to="/admin">Adimi</NavLink>
        
    </div>
  )
}

export default NavBar