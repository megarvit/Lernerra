import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const departments = [
  "Sales",
  "HR",
  "Customer Support",
  "Finance",
  "Marketing",
  "Product Development",
  "Other"
];

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneno: "",
    department: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phoneno: formData.phoneno,
      department: formData.department,
      message: formData.message,
    };

    emailjs
      .send(
        "service_0ztbt2p", 
        "template_k5vmc3e", 
        templateParams,
        "wGHbL4rgw-eKoJ_Ld" 
      )
      
      .then((response) => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phoneno: "",
          department: "",
          message: "",
        }); 
      })
      .catch((error) => {
        alert("Failed to send the message. Please try again.");
        console.error("EmailJS Error:", error.text);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <footer className="footer" id="contactus">
        <div className="footer-container">
          <div className="footer-left">
            <h2>GET IN TOUCH</h2>
            <hr className="footer-line" />
            <p>
              Please fill out the form below to send us an email and we will get
              back to you as soon as possible.
            </p>
            <form className="footer-form" onSubmit={handleSubmit}>
              <div className="footer-input-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>
              <div className="footer-input-row">
                <input
                  type="text"
                  name="phoneno"
                  placeholder="Phone Number"
                  value={formData.phoneno}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  disabled={loading}
                >
                  <option value="">Select a department</option>
                  {departments.map((department) => (
                    <option key={department} value={department}>
                      {department}
                    </option>
                  ))}
                </select>
              </div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={loading}
              ></textarea>
              <button
                type="submit"
                className="footer-button"
                disabled={loading}
              >
                {loading ? "Sending..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>
          <div className="footer-right">
            <h3>Contact Info</h3>
            <div className="address">
              <p>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} /> Address
                </span>
                58/173/13,30 E Adarsh Nagar,
                Kheria Mode Agra 282001, 
                Uttar Pradesh, India
              </p>
              <p>
                <br />
                VIT Bhopal University, Kothri Kalan,
                Sehore District 466114,
                Madhya Pradesh, India 
              </p>
            </div>
            <p>
              <span>
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </span>
              garvitgarvitjain0306@gmail.com
            </p>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">© 2024 Garvit Jain, All Rights Reserved</div>
    </>
  );
};

export default Footer;
