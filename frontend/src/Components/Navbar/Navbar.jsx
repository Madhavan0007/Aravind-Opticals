import React, { useState } from 'react';
import './Navbar.css';

import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';
export const Navbar = () => {

    const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" height="100px" width="100px"/>
            <p>ARAVIND OPTICALS</p>
        </div>
        <div className="nav-menu">
            <li onClick={() => setMenu("home")}>
                <Link style={{textDecoration: 'none'}} to='/' className='nav-link'>HOME</Link>{menu==="home"?<hr/>:<></>}
            </li>
            <li onClick={() => setMenu("products")}>
                <Link style={{textDecoration: 'none'}} to='/products' className='nav-link'>PRODUCTS</Link>{menu==="products"?<hr/>:<></>}
            </li>
            <li onClick={() => setMenu("about")}>
                <Link style={{textDecoration: 'none'}} to='/about' className='nav-link'>ABOUT US</Link>{menu==="about"?<hr/>:<></>}
                </li>
            <li onClick={() => setMenu("contact")}>
                <Link style={{textDecoration: 'none'}} to='/contact' className='nav-link'>CONTACT US</Link>{menu==="contact"?<hr/>:<></>}
            </li>
        </div>
    </div>
  );
}
