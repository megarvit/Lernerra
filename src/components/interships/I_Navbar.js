import React, { useState } from 'react';
import './Internship.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-2" id="I_navbar">
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="\assets\Logowhite-removebg-preview.png" alt="Lernerra Logo" />
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
     <li><a href="/">Home</a></li>
        <li><a href="#I_details">Details</a></li>
        <li><a href="#">Dates</a></li>
        <li><a href="#perks">Perks</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#I_faq">FAQs</a></li>
        <a href="#contactus" className="contact-btn">Contact</a>
      </ul>
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      
    </nav>
    </div>
  );
};

export default Navbar;
