import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
        <Link to='/'>Home</Link>
        <Link to='/todo'>Todo</Link>
        <Link to='/counter'>Counter</Link>
        <Link to='/login'>Login</Link>
        
    </div>
  )
}

export default NavBar