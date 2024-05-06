import React, {useEffect} from 'react'
import Hero from '../../Components/Hero/Hero';
import aboutimg from '../../Components/Assets/about1.jpg';
import contactlens from '../../Components/Assets/contact-lens.png';
import eyecheck from '../../Components/Assets/eye-check.png';
import visioncheck from '../../Components/Assets/vision-check.png';
import glasses from '../../Components/Assets/glasses.svg'
import professionals from '../../Components/Assets/professional.png';
import frames from '../../Components/Assets/whyus-frames.png';
import wallet from '../../Components/Assets/wallet.png';
import eyeInstrument from '../../Components/Assets/eye-instrument.png';
import glasspick from '../../Components/Assets/glass-pick.jpg';
import clock from '../../Components/Assets/clock.svg';
import './About.css';
const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div>
        <Hero 
            title="ABOUT US"
            p1="Vision Crafted,"
            p2="Care Delivered:"
            p3="Your Trusted Optical Partner"
        />

        <div className="aboutus-container">

            <div className="aboutus">
                <img src={aboutimg} alt="About Us" height="300px" width="350px"/>
                <div>
                    <p className='head'>Style Yourself With The Best Lens</p>
                    <p className='para'>At Aravind, our customers are our top priority, and we are dedicated to providing exceptional care</p>
                    <p className='para'>and personalized service to ensure their eyecare needs are met with excellence and attention to detail.</p>
                </div>
            </div>

            <div className="line"></div>

            <div className="our-services">
                <p className='service-title'>Our Services</p>
                <div className="glasses">
                    <div className="description">
                        <div className="image-box">
                            <img src={glasses} className='glass-icon'alt="glasses"/>
                        </div>
                        <p>Prescription Glasses</p>
                    </div>
                    
                    <div className="description">
                        <div className="image-box">
                            <img src={contactlens} alt="contactlens" />
                        </div>
                        <p>Contact Lens</p>
                    </div>
                    
                    <div className="description">
                        <div className="image-box">
                            <img src={eyecheck} alt="eyecheck" />
                        </div>
                        <p>Eye Care</p>
                    </div>
                    
                    <div className="description">
                        <div className="image-box">
                            <img src={visioncheck} alt="visioncheck" />
                        </div>
                        <p>Vision Check</p>
                    </div>
                </div>
            </div>

            <div className="line"></div>

            <div className="why-us">
            <p className='whyus-title'>Why Us</p>
               <div className="passage-container">
                        <div className="whyus-passage">
                            <img src={professionals} alt="professionals" />
                            <p>Experienced Professionals</p>
                        </div>

                        <div className="whyus-passage">
                            <img src={frames} alt="professionals" />
                            <p>High Quality Frame</p>
                        </div>

                        <div className="whyus-passage">
                            <img src={wallet} alt="professionals" />
                            <p>Affordable Price</p>
                        </div>

                        <div className="whyus-passage">
                            <img src={eyeInstrument} alt="professionals" />
                            <p>Latest Technology</p>
                        </div>
                </div>

                
            </div>

            <div className="line"></div>

            <div className="opening">

                <div className="opening-title">
                        Plan Your Visit Now
                </div>
                
                <div className="opening-container">

                    <div className="opening-left">

                        <div className="image-container">
                            <img src={clock} alt="clock" />
                            <p>Opening Hours</p>
                        </div>

                        <div className="opening-details">
                            <div className="details">
                                <p className='dates'>Monday - Friday</p>
                                <p className='timings'>08.00 AM - 04.00 PM</p>
                            </div>
                            <div className="details">
                                <p className='dates'>Saturday</p>
                                <p className='timings'>10.00 AM - 19.00 PM</p>
                            </div>
                            <div className="details">
                                <p className='dates'>Sundays & Holidays</p>
                                <p className='timings'>Closed</p>
                            </div>
                        </div>

                    </div>

                    <div className="opening-right">

                        <div className="image-right">
                        <img src={glasspick} alt="glass-pick" />
                        </div>
                    
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>

  )
}

export default About