import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); 
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuOnClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false); 
    }
  };

  return (
    <header className="header" id="home-nav">
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img
              src="\assets\Logowhite-removebg-preview.png"
              alt="Logo"
              className="logo-image"
            />
          </NavLink>
        </div>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li>
            <a href="#home" onClick={closeMenuOnClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#joinus" onClick={closeMenuOnClick}>
              About Us
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenuOnClick}>
              Courses
            </a>
          </li>
          <li>
            <Link to="/career" onClick={closeMenuOnClick}>
              Career+
            </Link>
          </li>
          <li>
            <a href="#contactus" onClick={closeMenuOnClick}>
              Contact Us
            </a>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
