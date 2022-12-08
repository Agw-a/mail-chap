import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'
const Error404 = () => {
  return (
    <div className='error-container'>
    <div style={{justifyContent:"center"}} className="error-page">
      <img className="image" src="https://cdn-icons-png.flaticon.com/512/7438/7438599.png" alt="error-file"/>
      <h2>404</h2>
      <h4>We couldn't find the resource.Page Not Found</h4>
        <p>You seem to have wandered too far from your friends,</p>

        <p style={{textAlign:"center"}}> 
        <Link className='error-btn' to={"/"} >Return Home</Link>
         </p>
        
        </div>
        </div>

  )
}

export default Error404;