import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Homepage.css';
import data from "../../data/data.json"

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(data.Testi); // Access the 'Testi' array from the JSON data
  }, []);

  
  return (
    <div className="testimonial-page">
      {/* Heart icon positioned top left */}
      <img 
        src="/assets/Heart.png" 
        alt="Heart icon" 
        className="Tsti-imageL" 
      />

      <h1 className="testimonial-title" style={{ marginTop: '50px' }}>Testimonials</h1>

      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="testimonial-card" 
            style={{ backgroundColor: index === 0 || index === 2 || index === 3 || index === 5 ? '#F0F0F0' : 'white' }}
          >
            <div className="testimonial-image">
              <img 
                src={testimonial.image} 
                className="card-img-top" 
                alt={testimonial.name} 
              />
            </div>
            <div className="card-body">
              <h5 className="testimonial-name">{testimonial.name}</h5>
              <p className="testimonial-job-title">{testimonial.jobTitle}</p>

              {/* Conditionally render stars */}
              {(index === 0 || index === 2 || index === 4) && (
                <div className="testimonial-rating">
                  <FontAwesomeIcon icon={faStar} className="star" />
                  <FontAwesomeIcon icon={faStar} className="star" />
                  <FontAwesomeIcon icon={faStar} className="star" />
                  <FontAwesomeIcon icon={faStar} className="star" />
                  <FontAwesomeIcon icon={faStar} className="star" />
                </div>
              )}

              <p className="testimonial-text">{testimonial.text}</p>
            </div>

            {/* Display company logo */}
            <div className="testimonial-company">
              <img src={testimonial.companyLogo} alt="Company Logo" className="company-logo" />
            </div>
          </div>
        ))}
      </div>
      {/* Image at the bottom left */}
      <div><img 
        src="/assets/form.png" 
        alt="Form icon" 
        className="Testi-imageR" 
      /></div>
      
    </div>
  );
}
