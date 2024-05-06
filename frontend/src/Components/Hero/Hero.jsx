import React from 'react'
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';
import heroimage from '../Assets/banner5-removebg.png';
const Hero = ({ title, p1, p2, p3, isHome }) => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>{ title }</h2>
            <div>
                <p>{ p1 }</p>
                <p>{ p2 }</p>
                <p>{ p3 }</p>
            </div>
            { isHome &&
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="arrow" />
                </div>
            }
        </div>
        <div className="hero-right">
            <img src={heroimage} alt="heroimage" height="500px" width="450px"/>
        </div>
    </div>
  )
}

export default Hero