import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Homepage.css";

export default function ContactPopup({ show, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure keys match your EmailJS template
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    };

    // Sending form data using EmailJS
    emailjs
      .send(
        "service_0ztbt2p", // Replace with your Service ID
        "template_k5vmc3e", // Replace with your Template ID
        templateParams,
        "wGHbL4rgw-eKoJ_Ld" // Replace with your Public Key
      )
      .then((result) => {
        console.log("Email successfully sent:", result.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
        onClose(); // Close the popup after submission
      })
      .catch((error) => {
        console.error("Failed to send email:", error.text);
        alert("Failed to send message. Please try again.");
      });
  };

  if (!show) return null;

  return (
    <div id="contact-popup">
      <div className="contact-form-container">
        <div className="contact-info">
          <h3>Let's get in touch</h3>
          <p>We're open for any suggestion or just to have a chat</p>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i> 198 West 21th Street,
              Suite 721 New York NY 10016
            </li>
            <li>
              <i className="fas fa-phone"></i> +1 235 2355 98
            </li>
            <li>
              <i className="fas fa-envelope"></i> info@yoursite.com
            </li>
            <li>
              <i className="fas fa-globe"></i> Website yoursite.com
            </li>
          </ul>
        </div>
        <div className="contact-form">
          <div className="contact-heading">
            <h3>Get in touch</h3>
            <span className="closeButton" onClick={onClose}>
              &times;
            </span>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
