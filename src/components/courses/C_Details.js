import React from "react";
import "./Course.css";
import data from "../../data/data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserGraduate,  
  faAward,   
  faBriefcase,    
  faTasks,        
  faHandshake
} from '@fortawesome/free-solid-svg-icons';
const iconMap = {
  faUserGraduate: faUserGraduate, 
  faAward: faAward,  
  faBriefcase: faBriefcase,       
  faTasks: faTasks,                
  faHandshake: faHandshake        
};
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "lightblue", }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "lightblue" }}
      onClick={onClick}
    />
  );
}
const Details = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="hackathon-container" id="c_details">
      <section>
        <h1>Details</h1>

        <div className="objective-section">
          <h2>Objective</h2>
          <p>
            Stratathon aims to bring together strategic minds and innovative
            thinkers to collaboratively solve real-world challenges. This
            hackathon seeks to inspire creativity, enhance strategic and
            technical skills, and provide career development opportunities
            through mentorship and networking with industry leaders. The event
            spans a comprehensive 4-month program designed to guide participants
            from the initial idea stage to the final project review.
          </p>
        </div>

         {/* // phase-1 */}
         <div className="Phase1-section" id="coursephase">
          <h2>Phase 1: Four Year Roadmap for B.Tech Placemnets</h2>
          <Slider {...settings} className="card1-list">
          
            {data.roadmap.map((phase1) => (
              <div key={phase1.id} className="card1">
                <h5>{phase1.title}</h5>
                <div className="card1-content">
                  <div className="card1-img-container">
                    <img
                      src={phase1.image}
                      alt="Icon"
                      className="card1-image"
                    />
                  </div>
                  <ul>
                    { phase1.description1&& (
                      <li>{phase1.description1}
                      <ul>
                        {/* For container of 2nd card */}
                        {phase1.Languages &&(
                          <li>{phase1.Languages}
                          {phase1["Box 2"] &&(
                            <li>{phase1["Box 2"]}</li>
                          )}
                          {/* upto here */}
                          <ul>
                            {phase1.Languages1 && (
                              <li>{phase1.Languages1}</li>
                            )}
                            {phase1.Languages2 && (
                              <li>{phase1.Languages2}</li>
                            )}
                            {phase1.Languages3 && (
                              <li>{phase1.Languages3}</li>
                            )}
                          </ul>
                          </li>
                          
                        )}
                      </ul>
                      </li>
                    )}
                    {phase1.description2 && (
                      <li>{phase1.description2}
                      <ul>
                        {phase1.cousrse1 &&(
                          <li>{phase1.cousrse1}</li>
                        )}
                        {phase1.cousrse2 &&(
                          <li>{phase1.cousrse2}</li>
                        )}
                        {phase1.cousrse3 &&(
                          <li>{phase1.cousrse3}</li>
                        )}
                      </ul>
                      </li>
                    )}
                    {/* for 3rd box */}
                    {phase1.description3 && (
                      <li>{phase1.description3}
                      <ul>
                        {phase1.box1 &&(
                          <li>{phase1.box1}</li>
                        )}
                        {phase1["box2 "] &&(
                          <li>{phase1["box2 "]}</li>
                        )}
                        {phase1.box3 &&(
                          <li>{phase1.box3}</li>
                        )}
                        {phase1.box4 &&(
                          <li>{phase1.box4}</li>
                        )}
                      </ul>
                      </li>
                      )}
                      {/* // upto here */}
                    {phase1.description4 && (
                      <li>{phase1.description4}</li>
                    )}
                    {phase1.description5 && (
                      <li>{phase1.description5}</li>
                    )}
                    {phase1.description6 && (
                      <li>{phase1.description6}</li>
                    )}
                  </ul>
                  
                </div>
                
              </div>
              
            ))}
            </Slider>
        </div>
{/* ends here */}

   {/* leaning outcomes */}
  <section >

<div id="Phase2-section">
    <h2>Learning Outcomes</h2>
    <div id="card1-list">
      {data.StratathonPhase.map((phase2) => (
        <div key={phase2.id} id="card2">
          <h5>{phase2.title}</h5>
          <div id="card1-content">
            <div id="card1-img-container">
              <img
                src={phase2.image}
                alt="Icon"
                id="card1-image"
              />
            </div>
            <ul>
              {phase2.description1 && (
                <li>{phase2.description1}</li>
              )}
              {phase2.description2 && (
                <li>{phase2.description2}</li>
              )}
              {phase2.description3 && (
                <li>{phase2.description3}</li>
              )}
              {phase2.description4 && (
                <li>{phase2.description4}</li>
              )}
               {phase2.description5 && (
                <li>{phase2.description5}</li>
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>





</section>
{/* ends here */}

     {/* details about four years curriculum like lectures which will be available during these years */}
     <div className="Phase3-section" id="lecturesAvailable">
          <h2>Lectures Available</h2>
          <div className="card3-list">
            {data.coursePhase3.map((phase2) => (
              <div key={phase2.id} className={phase2.id === 3 ? "card4" : "card3"}>
                <h2>{phase2.title}</h2>
                <h5>{phase2.subheading}</h5>
                <div className={phase2.id === 3 ? "card4-content" : "card3-content"}>
                  <div className={phase2.id === 3 ? "card4-img-container" : "card3-img-container"}>
                    <img
                      className={phase2.id === 3 ? "card4-image" : "card3-image"}
                      src={phase2.image}
                      alt="Icon"
                    />
                  </div>
                  <ul>
                    {phase2.description1 && (
                      <li>{phase2.description1}</li>
                    )}
                    {phase2.description2 && (
                      <li>{phase2.description2}</li>
                    )}
                    {phase2.description3 && (
                      <li>{phase2.description3}</li>
                    )}
                    {phase2.description4 && (
                      <li>{phase2.description4}</li>
                    )}
                     {phase2.description5 && (
                      <li>{phase2.description5}</li>
                    )}
                     {phase2.description6 && (
                      <li>{phase2.description6}</li>
                    )}
                    {phase2.description7 && (
                      <li>{phase2.description7}</li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Phase 3 ends here */}
      </section>
      {/* section perk */}
      <section id="coursePerk">
      <h1>Star Perks</h1>
      <div className="prize-container">
        <div className="new-section-container">
          <div className="left-column">
            {/* Map the first three perks for the left column */}
            {data.StarCoursePerk.slice(0, 3).map((perk) => (
              <div key={perk.id} className="reward-container">
                <div className="reward-card">
                  <h5>{perk.title}</h5>
                </div>
                <img src="/assets/oval 1.png" className="oval-img" />
                <div className="reward-image">
                <FontAwesomeIcon 
              icon={iconMap[perk.image]} size="2x" 
              className="perks-icon"  
            />
                </div>
              </div>
            ))}
          </div>

          <div className="center-box">
            <img src="assets/rewards.png" alt="Center Image" />
          </div>

          <div className="right-column">
            {/* Map the remaining perks for the right column */}
            {data.StarCoursePerk.slice(3,5).map((perk) => (
              <div key={perk.id} className="reward-container">
                <div className="reward-card">
                  <h5>{perk.title}</h5>
                </div>
                <img src="/assets/oval 1.png" className="oval-img" />
                <div className="reward-image">
                <FontAwesomeIcon 
              icon={iconMap[perk.image]} size="2x"
              className="perks-icon" 
            />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
{/* ends here */}
    </div>
  );
};

export default Details;
