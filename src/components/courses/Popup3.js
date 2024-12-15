// Popup.js
import React from 'react';
import './Course.css';


const Popup = ({ isOpen, closePopup, title, message }) => {
    if (!isOpen) return null;
  
    return (
      <div className="popup" id='courses-popup'>
        <div className="popupContent">
          <span className="closeButton" onClick={closePopup}>×</span>
          <h2>{title}</h2> {/* Dynamic title */}
          <p>{message}</p> {/* Dynamic content */}
        </div>
      </div>
    );
  };
  
  export default Popup;