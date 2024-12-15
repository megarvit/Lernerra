import React, { useState, useEffect, useRef } from 'react'
import "./Internship.css"
import Navbar from './I_Navbar.js';
import Footer from "../footer/Footer.js";
import Details from './I_Details.js';
// import { ContactUs } from './I_ContactUs.js';
import Faq from './I_Faq.js';
import  Popup  from './Popup2.js';


const cardContent = {
  "Project Building": {
    message: "Learn essential project-building skills and techniques to bring your ideas to life."
  },
  "Workshops": {
    message: "Join hands-on workshops with experts to gain practical knowledge and experience."
  },
  "Panel Discussions": {
    message: "Participate in engaging discussions with industry leaders and gain valuable insights."
  },
  "Networking": {
    message: "Connect with professionals and peers to expand your network and explore opportunities."
  },
  "Awards": {
    message: "Celebrate achievements and gain recognition for your hard work in various fields."
  }
};


function Internship() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const footerRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState({ title: "", message: "" });

  const openPopup = (card) => {
    const { message } = cardContent[card];
    setPopupContent({ title: card, message }); // Set both title and message
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent({ title: "", message: "" }); // Reset the content after closing
  };


  useEffect(() => {
    window.scrollTo(0, 0); // Ensures page starts at the top on reload
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const footerPosition = footerRef.current?.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;

      setShowScrollButton(window.scrollY > 100 && scrollPosition < footerPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <>
      <Navbar />
      <section id="internship">
        <div class="parallax-background"></div>
        <div class="section-content">
          <h1 class="title">Internships</h1>
          <p class="description">Experience innovation, competition, and collaboration like never before!</p>
          <div class="cards-container">
          <div
          className="animated-card"
          onClick={() => openPopup("Project Building")}
        >
          Project Building
        </div>
        <div
          className="animated-card"
          onClick={() => openPopup("Workshops")}
        >
          Workshops
        </div>
        <div
          className="animated-card"
          onClick={() => openPopup("Panel Discussions")}
        >
          Panel Discussions
        </div>
        <div
          className="animated-card"
          onClick={() => openPopup("Networking")}
        >
          Networking
        </div>
        <div
          className="animated-card"
          onClick={() => openPopup("Awards")}
        >
          Awards
        </div>
         </div>
         <Popup 
        isOpen={isPopupOpen}
        closePopup={closePopup}
        title={popupContent.title} // Pass the title to the popup
        message={popupContent.message} // Pass the message to the popup
      />
        </div>
      </section>
      <Details />
      {/* <Reviews /> */}
       <Faq/>
      {/* <ContactUs /> */}
      <footer ref={footerRef}>
        {<Footer />}
      </footer>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
          ⬆️
        </button>
      )}


    </>
  )
}

export default Internship;