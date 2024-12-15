import React, { useState } from "react";
import "./Course.css";
export const ContactUs = () => {
  const features = [
    {
      title: "Brainstorm",
      icon: "💡",
      description:
        "Unleash the power of your imagination! In this phase, we dare you to dream big and think boldly. Its all about pushing boundaries and sparking new ideas that could redefine whats possible!",
    },
    {
      title: "Development",
      icon: "⚙️",
      description:
        "Where vision becomes reality. This is the time to dig deep, design, and shape your ideas. Here, every thought, every sketch, every line of code brings you one step closer to a groundbreaking solution!",
    },
    {
      title: "Programming",
      icon: "💻",
      description:
        "The heart of creation! This is where your skills shine as you transform concepts into fully functional projects. Every challenge is an opportunity to innovate, every bug a chance to grow!",
    },
    {
      title: "Timing",
      icon: "⏱️",
      description:
        "Every second counts! Hackathons test not only your skills but your endurance and time management. Make every moment work for you, and let your progress fuel the drive to finish strong!",
    },
    {
      title: "Teamwork",
      icon: "🤝",
      description:
        "Together, we achieve greatness. By bringing together diverse strengths and perspectives, teamwork elevates each project beyond what one person could do alone. Collaborate, communicate, and conquer!",
    },
    {
      title: "Goal",
      icon: "🏁",
      description:
        "Every journey starts with a vision. Your goal is the guiding light that keeps you and your team focused and inspired. Chase it with passion, and let it drive your every decision and action!",
    },
  ];

  // State for managing popup visibility and content
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState({
    title: "",
    description: "",
  });

  const openPopup = (feature) => {
    setPopupContent({ title: feature.title, description: feature.description });
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent({ title: "", description: "" });
  };

  return (
    <>
      <section id="c_contact-us">
        <div id="c_contact-form">
          <h2>Contact Us</h2>
          <input
            type="text"
            placeholder="Enter your name"
            className="input-field"
          />
          <input
            type="text"
            placeholder="Enter your email"
            className="input-field"
          />
          <button className="submit-button">Submit</button>
        </div>
        <div id="c_contact-image">
          <img src="\assets\problemStatement.png" alt="Contact illustration" />
        </div>
      </section>
      <section id="c_hackathon">
        <div className="hackathon-section">
          <h2 className="hackathon-title">Hackathon</h2>
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
        <div className="popup" id="strtathon-popup">
          <div className="popupContent">
            <span className="closeButton" onClick={closePopup}>
              ×
            </span>
            <h2>{popupContent.title}</h2>
            <p>{popupContent.description}</p>
          </div>
        </div>
      )}
    </>
  );
};
