import React from 'react'
import "./StratathonPhase2.css"
export const ContactPhase2 = () => {
  return (
    <section id="sp2-contact-us">
    <div id="sp2-contact-form">
        <h2>Contact Us</h2>
        <input type="text" placeholder="Enter your name" className="input-field" />
        <input type="text" placeholder="Enter your email" className="input-field" />
        <button className="submit-button">Submit</button>
    </div>
    <div id="sp2-contact-image">
        <img src="\assets\problemStatement.png" alt="Contact illustration" />
    </div>
</section>
  )
}
