import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"

const Navbar = () => {
  return (
    <div>
        <navbar className="navbar navbar-light bg-light nav1" >
       <ul>
        <Link to="/register"><li>Register</li></Link>
        <Link to="/login"><li>Login</li></Link>
       </ul>
        </navbar>
        
      
    </div>
  )
}

export default Navbar;
