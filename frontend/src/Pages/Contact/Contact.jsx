import React, { useEffect } from "react";
import Hero from '../../Components/Hero/Hero';
import './Contact.css';
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  
    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);

  return (
    <div className="contact">
        <Hero 
            title="CONTACT US"
            p1="please"
            p2="fill the form"
            p3="to contact us"
        />
        <div>
            <div className="contact-heading">Contact Us</div>
            <div className="container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4205.441666398281!2d78.07262147618859!3d10.961689844171314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2f004bdf8fef%3A0x9222106c35958446!2sAravind%20Opticals!5e0!3m2!1sen!2sin!4v1714059429858!5m2!1sen!2sin" width="600" height="450" style={{"border":0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Aravind opticals"></iframe>

            
                <div className="contact-form">
                <h2 className="heading">Feel Free to Contact us</h2>
                <form
                    action="https://formspree.io/f/mleqakno"
                    method="POST"
                    className="contact-inputs">
                        <div className="form-field">
                            <label htmlFor="username">Username</label>
                            <input
                            type="text"
                            name="username"
                            placeholder="Enter username"
                            autoComplete="on"
                            required
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email">Email</label>
                            <input
                            type="email"
                            name="Email"
                            placeholder="Enter email"
                            autoComplete="on"
                            required
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="message">Message</label>
                            <textarea
                            name="message"
                            placeholder="Write your message"
                            cols="30"
                            rows="6"
                            autoComplete="on"
                            required></textarea>
                        </div>
                        <input type="submit" value="Send" />

                </form>
                </div>
            </div>
            <div className="contact-details">
                <div className="box">
                    <div className="around">
                        <FaPhoneVolume className="icon"/>
                    </div>
                    <div className="base">
                        <div className="title">Phone Number</div>
                        <p>+91 7094449990</p>
                    </div>
                </div>
                <div className="box">
                    <div className="around">
                        <MdEmail className="icon"/>
                    </div>
                    <div className="base">
                        <div className="title">Email Address</div>
                        <p>aravindopticalkarur@gmail.com</p>
                    </div>
                </div>
                <div className="box">
                    <div className="around">
                        <IoLogoWhatsapp className="icon"/>
                    </div>
                    <div className="base">
                        <div className="title">Whatsapp Number</div>
                        <p>+91 6369638806</p>
                    </div>
                </div>
                <div className="box">
                    <div className="around">
                        <FaLocationDot className="icon"/>
                    </div>
                    <div className="base">
                        <div className="title">Location</div>
                        <p>ARAVIND OPTICALS <br />88, Kovai Road, <br /> Karur-639002</p>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
  );
};

export default Contact;