import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
    <div className="container">
        <div className="logo-brand">
            <NavLink to="/">Vansh</NavLink>

        </div>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/register">Sign up</NavLink></li>
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Navbar