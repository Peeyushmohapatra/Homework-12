import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to="/home"><h3>HOME</h3></Link>
        <Link to="/product"><h3>PRODUCT</h3></Link>
    </div>
  )
}

export default Navbar