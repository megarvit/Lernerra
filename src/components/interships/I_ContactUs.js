import React, { useState } from 'react';
import "./Internship.css";
export const ContactUs = () => {
    const features = [
        { title: 'Brainstorm', icon: '💡', description: 'This is the description for Brainstorm.' },
        { title: 'Development', icon: '⚙️', description: 'This is the description for Development.' },
        { title: 'Programming', icon: '💻', description: 'This is the description for Programming.' },
        { title: 'Timing', icon: '⏱️', description: 'This is the description for Timing.' },
        { title: 'Teamwork', icon: '🤝', description: 'This is the description for Teamwork.' },
        { title: 'Goal', icon: '🏁', description: 'This is the description for Goal.' },
    ];

    // State for managing popup visibility and content
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupContent, setPopupContent] = useState({ title: '', description: '' });

    const openPopup = (feature) => {
        setPopupContent({ title: feature.title, description: feature.description });
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setPopupContent({ title: '', description: '' });
    };

  return (
    <>
    <section id="I_contact-us">
            <div id="I_contact-form">
                <h2>Contact Us</h2>
                <input type="text" placeholder="Enter your name" className="input-field" />
                <input type="text" placeholder="Enter your email" className="input-field" />
                <button className="submit-button">Submit</button>
            </div>
            <div id="I_contact-image">
                <img src="\assets\problemStatement.png" alt="Contact illustration" />
            </div>
        </section>
<section id='i-hackathon'>
<div className="hackathon-section">
            <h2 className="hackathon-title">Internship</h2>
            <div className="feature-cards">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="feature-card"
                                onClick={() => openPopup(feature)} // Open popup on card click
                            >
                                <div className="feature-icon">{feature.icon}</div>
                                <div className="feature-title">{feature.title}</div>
                            </div>
                        ))}
                    </div>
        </div>
</section>
  {/* Popup component */}
  {isPopupOpen && (
                <div className="popup" id='internship-popup'>
                    <div className="popupContent">
                        <span className="closeButton" onClick={closePopup}>×</span>
                        <h2>{popupContent.title}</h2>
                        <p>{popupContent.description}</p>
                    </div>
                </div>
            )}

</>
  )
}
