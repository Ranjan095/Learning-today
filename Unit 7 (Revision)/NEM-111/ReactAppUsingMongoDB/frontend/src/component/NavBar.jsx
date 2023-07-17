import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"
export const NavBar = () => {
  return (
    <div className='nav-bar'>
        <NavLink to={'/'}><h3>Home</h3></NavLink>
        <NavLink to={'/notes'}><h3>Notes</h3></NavLink>
        <NavLink to={'/login'}><h3>Login</h3></NavLink>
        <NavLink to={'/signup'}><h3>Signup</h3></NavLink>
    </div>
  )
}
