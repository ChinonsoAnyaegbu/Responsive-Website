import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import { FaInstagram, FaYoutube, FaPinterest, FaTiktok} from 'react-icons/fa'

 import  './NavbarStyles.css'
function Navbar() {
  const [nav, setNav] =useState(false)
  const handleNav = () =>setNav(!nav)
  return (
    <div className = "navbar">
        <div className="logo">
            <h2>CI</h2>
        </div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>About</li>
            <li>My services</li>
            <li>Gallery</li>
            <li>Contact</li>
        </ul>
    
        <div className="hamburger" onClick = {handleNav}>
          <HiOutlineMenuAlt4 className = 'icon'></HiOutlineMenuAlt4>
      
        </div>
<div className= {nav ? 'mobile-menu active' : 'mobile-menu'}>
  <ul className="mobile-nav">
  <li>Home</li>
            <li>About</li>
            <li>My services</li>
            <li>Gallery</li>
            <li>Contact</li>
  </ul>
<div className = "mobile-menu-bottom">
  <div className="menu-icons">
    <button>Calculate your style</button>
    <button>book Me</button>
  </div>
  <div className="social-icons">
    <FaInstagram className ='icon' />
    <FaYoutube className ='icon' />
    <FaPinterest className ='icon' />
    <FaTiktok className ='icon' />
  </div>
</div>
        </div>
    </div>
  )
}

export default Navbar
