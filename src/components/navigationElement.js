import React from "react"
import {NavLink } from "react-router-dom"
import "../styles/navbar.css"

const RenderNavigation = () => {
    return(
      <nav className='nav'>
        <NavLink style={({isActive}) => isActive? {color: "black"} : {color: "none"}}
        to="/Home" className='home-link'>mail-chap</NavLink>

        <div className="routes">
        <NavLink style={({isActive}) => isActive? {color: "black"} : {color: "none"}}
     to="/About" className='nav-txt'>About</NavLink>

        <NavLink style={({isActive}) => isActive? {color: "black"} : {color: "none"}}
   to="/Users" className='nav-txt'>Users</NavLink>
        </div>
        
      </nav>
    )
  }

  export default RenderNavigation;