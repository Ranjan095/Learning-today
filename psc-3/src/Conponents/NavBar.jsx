import React from 'react'
import { NavLink } from 'react-router-dom'

let links=[
    {path:'/',element:"Home"},
    {path:'/login',element:"Login"},
    {path:'/product',element:"Products"},
    {path:'/register',element:"Register"}
]

const NavBar = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-around'}}>
       {links.map((ele)=><h4  key={ele.path}><NavLink style={{color:'blue',textDecoration:'none'}} to={ele.path}>{ele.element}</NavLink></h4>)}
    </div>
  )
}

export default NavBar