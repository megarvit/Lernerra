import React, { useState } from 'react'
import "./Career.css"

const CareerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar-2" id="career_navbar">
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="\assets\Logowhite-removebg-preview.png" alt="Lernerra Logo" />
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
     <li><a href="/">Home</a></li>
        <li><a href="#our-services">Services</a></li>
        <li><a href="#grid-section">Details</a></li>
        <li><a href="#gallery-section">Gallery</a></li>
        <li><a href="#career-testimonial-section">Reviews</a></li>
        <a href="#contactus" className="contact-btn">Contact</a>
        {/* <a href="#I_contact-us" className="contact-btn">Contact</a> */}
      </ul>
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      
    </nav>
    </div>
  )
}

export default CareerNavbar
