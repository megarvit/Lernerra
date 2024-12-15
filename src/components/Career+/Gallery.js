import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow,Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import "./Career.css"
import data from "../../data/data.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";



const Gallery = () => {
   // Create a reference to the Swiper instance
   const swiperRef = useRef(null);

   const handlePrevClick = () => {
     swiperRef.current.swiper.slidePrev(); 
   };
 
   const handleNextClick = () => {
     swiperRef.current.swiper.slideNext(); 
   };

  return (
    <>
    <section id='gallery-section'>
      <div className='gallery-container' >
        <div>
          <h1>Gallery</h1>
        </div>
        <div className='gallery-data' >
        <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              spaceBetween={5}
              slidesPerView={3}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 3.5,
                slideShadows: true,
              }}
              modules={[EffectCoverflow,Pagination, Navigation, Autoplay]}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              className="swiper_container"
              ref={swiperRef}
            >
              <SwiperSlide>
                <img src="assets/Image 29.png" alt="Slide 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="assets/Image 30.png" alt="Slide 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="assets/web.png" alt="Slide 3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="assets/Image 27.png" alt="Slide 4" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="assets/Image 28.png" alt="Slide 5" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="assets/Image 11.png" alt="Slide 6" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="assets/Image 12.png" alt="Slide 7" />
              </SwiperSlide>

              {/* Pagination Controls */}
              <div className="swiper-pagination"></div>
            </Swiper>
        </div>
        </div> 
        <div className="slider-controler">
          <button
            className="testimonial-swiper-button-prev testimonial-slider-arrow"
            onClick={handlePrevClick}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            className="testimonial-swiper-button-next testimonial-slider-arrow"
            onClick={handleNextClick}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      
        
    </section>

    <section id="career-testimonial-section">
      <h1>Testimonial</h1>
      <div className="career-testimonial-container">
        <div className="career-testimonial-left">
          <i className="fa fa-quote-left quote-icon"></i>
          <h2>Read from clients who have found the perfect career path with expert guidance...</h2>
<p>Discover testimonials from satisfied individuals who have found their ideal careers with Career Counseling, the trusted experts in helping you navigate your professional journey and unlock your full potential.</p>
          <button className="more-testimonials-btn">Enroll Now</button>
        </div>

        <div className="career-testimonial-right">
          <Swiper
            direction="vertical"
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={2}
            className="career-testimonial-swiper">
            {data.careerTestimonial.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="career-testimonial-card">
                  <div className="stars">
                    {"★".repeat(testimonial.rating).padEnd(5, "☆")}
                  </div>
                  <p className="review">"{testimonial.review}"</p>
                  <p className="name">- {testimonial.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>

    </>
    
   
  )
}

export default Gallery
