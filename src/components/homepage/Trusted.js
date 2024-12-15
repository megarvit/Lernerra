import React, { useState } from "react";
import "./Homepage.css";
import trusteddata from "../../data/data.json";

const Trusted = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % trusteddata.card.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? trusteddata.card.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div id="container">
        <h1 className="trusted-tittle">Trusted By</h1>
      </div>
      <div className="trusted-container">
        <button className="slider-btn-left" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="slider">
          <div className="trusted-card"style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {trusteddata.card.map((card) => (
              <div key={card.id} className="card-content">
                <img src={card.trusted_img}alt={`Card ${card.trusted_id}`}className="card-image"/>
                <div className="img-shadow"></div>
                  <img src={card.trusted_img2}alt={`Card ${card.trusted_id}`}className="trusted-rating"/>   
                  <ul className="li">
                    <li className="card-text">{card.trusted_txt}</li>
                    <li className="card-text">{card.trusted_txt2}</li>
                    <li className="name">{card.trusted_name}</li>
                    <li className="card-text">{card.trusted_job}</li>
                  </ul>
              </div>
            ))}
          </div>
        </div>
        <button className="slider-btn-right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <div className="card-tracker" id="joinus">
        {trusteddata.card.map((_, index) => (
          <span
            key={index}
            className={`trusted-dot ${index === currentIndex ? "active" : ""}`}
          ></span>
        ))}
      </div>
      <div className="container-1" >
          <h1>Join Us</h1>
        </div>
        <div className="join-handshake-container">
        <div className="handshake-img">
            <img src="\assets\handshake.png" />
          </div>
          <div className="join-us-img">
            <img src="\assets\Image 10.png"></img>
          </div>
          
      </div>

      <div className="container-2">
        <h1>In Partner With</h1>
      </div>
      <div className="partners-container">
        <div className="partners-names-box">
          <div>
            <img src="assets\Image 22.png" />
          </div>
          <div>
            <img src="assets\Image 25.png" />
          </div>
          <div>
            <img src="assets\Image 23.png" />
          </div>
          <div>
            <img src="assets\Image 26.png" />
          </div>
          <div>
            <img src="assets\Container 23.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
