import React, { useState, useEffect, useRef } from 'react'
import "./Homepage.css";
import { Button } from "react-bootstrap";
import ContactPopup from "./ContactPopup";
export default function Whatsnew() {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);
  return (
    <div className="start">
      <h1>What's New</h1>
      <p className="textcolor">
        In minim molit exercition deserrunt proident officia
        <br />
        sint excepteur aute eiusmod. Aute ullamc
      </p>
      <div fluid className="image">
        <div className="text">
          <img width={600} src="assets\Image 11.png" />
          <p className="text-danger">Category</p>
          <h3>Blog Title</h3>
          <p>
            Voluplate velit rulla cllum duis commando excerpteur esse laboris
            dolor esse. Tempor dolore aliqua eu elt and laboris incidient et.
          </p>
          <div className="Avtaar">
            <img src="assets\Avatar 8.png" />
            <h5>Isabel Quartez</h5>
            <p className="textcolor">Monday 15 June,2023</p>
          </div>
        </div>
        <div className="text">
          <img width={600} src="assets\Image 12.png" />
          <p className="text-danger">Category</p>
          <h3>Blog Title</h3>
          <p>
            Voluplate velit rulla cllum duis commando excerpteur esse laboris
            dolor esse. Tempor dolore aliqua eu elt and laboris incidient et.
          </p>
          <img src="assets\Avatar 6.png" />
          <h5>Isabel Quartez</h5>
          <p className="textcolor">Wednesday 18 August,2023</p>
        </div>
        <div className="text">
          <img width={600} height={470} src="assets\Image 10.png" />
          <p className="text-danger">Category</p>
          <h3>Blog Title</h3>
          <p>
            Voluplate velit rulla cllum duis commando excerpteur esse laboris
            dolor esse. Tempor dolore aliqua eu elt and laboris incidient et.
          </p>
          <img src="assets\Avatar 10.png" />
          <h5>Isabel Quartez</h5>
          <p className="textcolor">Thursday 22 December,2022</p>
        </div>
      </div>
      <div className="button">
        <button className="read-btn">Read more</button>
      </div>
      {/* get started */}
      <br></br>
      <br></br>
      <ContactPopup show={showPopup} onClose={handleClosePopup} />
    </div>
  );
}
