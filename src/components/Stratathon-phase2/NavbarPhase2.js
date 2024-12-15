import React, { useState } from 'react';
import './StratathonPhase2.css';
const NavbarPhase2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-2" id="sp2_navbar">
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="\assets\Logowhite-removebg-preview.png" alt="Lernerra Logo" />
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
     <li><a href="/">Home</a></li>
        <li><a href="#sp2_stages">Stages</a></li>
        <li><a href="#timeline-container">Timeline</a></li>
        <li><a href="#stratathon2-details">Details</a></li>
        <li><a href="#perks-section-custom">Perks</a></li>
        <li><a href="#sp2-faq">FAQs</a></li>

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

export default  NavbarPhase2;
