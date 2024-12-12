import React from 'react'
import logo from "../../assets/logo.png"
import "./navbar.css"
import { Link } from 'react-router-dom'
// import Login from '../login'


const Navbar = () => {
  return (
     
      <>
      
      <div>
      <div className="Nav-container">
      <img src={logo} className='logo'></img>
    <ul className='nav-ul'>
    <li className='nav-li'><Link to='/home'>Home</Link> </li>
    <li className='nav-li'><Link to='/login'>Login</Link></li>
    <li className='nav-li'><Link to='/register'>Register</Link></li>
  </ul>
  </div>
  </div>
     

      </>
  
    
     
  )
}

export default Navbar
