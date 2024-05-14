import React from 'react'
import './Footer.css';
import logo from '../Assets/logo.png';
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter  } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div className="footer-container">

                <div className="footer-image">
                    <img src={logo} alt="logo"/>
                    <div className="slogan">
                        <p>Vision Perfected</p>
                        <p>Style Selected</p>
                        <p>Your Optical Oasis!</p>
                    </div>
                </div>
                
                <div className="about">
                    <Link style={{textDecoration: 'none', color: 'black'}} to='/about' className='footer-link'>
                        <div>About Us</div>
                    </Link>
                    <p>Our Founder</p>
                    <p>Our Brands</p>
                    <p>Gallery</p>
                </div>
                
                <div className="service" id="service">
                        <Link to="/about/#service" style={{textDecoration: 'none', color: 'black'}}><div>Service</div></Link>
                        <p>Prescription Glasses</p>
                        <p>Contact Lens Services</p>
                        <p>Frame Selection</p>
                        <p>Vision Check</p>
                </div>

                <div className="find-us">
                    <div >Find Us</div>
                    <div className="icon-group">
                        <a href="https://wa.me/916369638806" style={{textDecoration: 'none', color: 'black'}} target="_blank" rel="noopener noreferrer">
                            <IoLogoWhatsapp className='icons whatsapp'/>
                        </a>
                        <a href="https://www.instagram.com/madhu._.balaji/" style={{textDecoration: 'none', color: 'black'}} target="_blank" rel="noopener noreferrer">
                            <RiInstagramFill className='icons instagram'/>
                        </a>
                        <a href="https://twitter.com/madhubalaji_vs" style={{textDecoration: 'none', color: 'black'}} target="_blank" rel="noopener noreferrer">
                            <FaSquareXTwitter className='icons twitter'/>
                        </a>
                    </div>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Footer