import React from "react";
import "./StratathonPhase2.css";
import data from "../../data/data.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faChalkboardTeacher,
  faAward,
  faRocket,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  faStar: faStar,
  faChalkboardTeacher: faChalkboardTeacher,
  faAward: faAward,
  faRocket: faRocket,
  faUsers: faUsers,
};

const DetailsPhase2 = () => {
  return (
    <>

<div className="Stratathon2-container" id="stratathon2-details">
      <section>
        <h1>Details</h1>

        <div className="objective-section">
          <h2>Objective</h2>
          <p>
            The objective of Stratothon is to bring together strategic minds and
            innovative thinkers to collaboratively solve real-world challenges.
            This hackathon aims to inspire creativity, enhance strategic and
            technical skills, and provide career development opportunities
            through mentorship, and networking with industry leaders.
          </p>
        </div>
        <div className="scope-section">
          <h2>Scope</h2>
          <p>
            The Stratothon is a focused program that guides participants from
            the initial idea stage to the final project review. Over the course
            of the event, participants will quickly develop and refine their
            ideas, receive targeted feedback from experts, and showcase their
            completed projects to a panel of judges. The top-performing teams
            will gain opportunities for placement assistance and professional
            development. This short but intense hackathon is designed to
            maximize creativity and innovation within a condensed timeframe.
          </p>
        </div>

        <div className="Phase1-section">
          <h2>Phase 1: Ideation & Planning</h2>
          <div className="card1-list">
            {data.Stratathon2Phase1.map((phase1) => (
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
                    {phase1.description1 && (
                      <li>{phase1.description1}</li>
                    )}
                    {phase1.description2 && (
                      <li>{phase1.description2}</li>
                    )}
                    {phase1.description3 && (
                      <li>{phase1.description3}</li>
                    )}
                    {phase1.description4 && (
                      <li>{phase1.description4}</li>
                    )}
                     {phase1.description5 && (
                      <li>{phase1.description5}</li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="Phase2-section">
          <h2>Phase 2: Development and Testing</h2>
          <div className="card1-list">
            {data.Stratathon2Phase2.map((phase2) => (
              <div key={phase2.id} className="card1">
                <h5>{phase2.title}</h5>
                <div className="card1-content">
                  <div className="card1-img-container">
                    <img
                      src={phase2.image}
                      alt="Icon"
                      className="card1-image"
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

        <div className="Phase3-section">
          <h2>Phase 3: Presentation & Wrap-up</h2>
          <div className="card1-list">
            {data.Stratathon2Phase3.map((phase3) => (
              <div key={phase3.id} className="card1">
                <h5>{phase3.title}</h5>
                <div className="card1-content">
                  <div className="card1-img-container">
                    <img
                      src={phase3.image}
                      alt="Icon"
                      className="card1-image"
                    />
                  </div>
                  <ul>
                    {phase3.description1 && (
                      <li>{phase3.description1}</li>
                    )}
                    {phase3.description2 && (
                      <li>{phase3.description2}</li>
                    )}
                    {phase3.description3 && (
                      <li>{phase3.description3}</li>
                    )}
                    {phase3.description4 && (
                      <li>{phase3.description4}</li>
                    )}
                     {phase3.description5 && (
                      <li>{phase3.description5}</li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prizes">
        <h1>Participation Benefits</h1>
        <div className="prize-container">
          <div className="new-section-container">
            <div className="left-column">
              {/* Map rewards for the left column */}
              {data.Stratathon2Perks.slice(0, 3).map((Perks2) => (
                <div className="reward-container">
                  <div key={Perks2.id} className="reward-card">
                    <h5>{Perks2.title}</h5>
                  </div>

                  <img src="/assets/oval 1.png" className="oval-img" />
                  <div className="reward-image">
                  <FontAwesomeIcon 
              icon={iconMap[Perks2.image]} size="2x" 
              className="perks-icon"  
            />
                  </div>
                </div>
              ))}
            </div>
            <div className="center-box">
              <img src="assets\rewards.png" alt="image"></img>
            </div>
            <div className="right-column">
              {/* Map rewards for the right column */}
              {data.Stratathon2Perks.slice(3, 5).map((perks2) => (
                <div className="reward-container" key={perks2.id}>
                  <div className="reward-card">
                    <h5>{perks2.title}</h5>
                  </div>
                  <img src="/assets/oval 1.png" className="oval-img" />
                  <div
                    className={"reward-image "}
                  >
                    <FontAwesomeIcon 
              icon={iconMap[perks2.image]} size="2x"
              className="perks-icon" 
            />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
     <section>
<div id="perks-section-custom">
  <div class="icon-custom top-left-icon-custom">🌟</div>
  
  <h2 id="perks-heading-custom">PERKS</h2>
  
  <div id="perks-grid-custom">
    <div class="perk-card-custom">
      <h3>For The Top Team</h3>
      <ul>
        <li>Paid Internship</li>
        <li>Exciting Prizes</li>
        <li>Exclusive Swags and Gifts</li>
      </ul>
    </div>
    
    <div class="perk-card-custom">
      <h3>For The Top 3 Teams</h3>
      <ul>
        <li>Placement Assistance: you would be provided with best in the industry, placement training and assistance, opportunity to get placed with strategyz or its fortune 500 clients.</li>
        <li>Professional Interview Preparation Sessions</li>
      </ul>
    </div>
    
    <div id="additional-info-card-custom">
      For all participants, certifications will be provided to enhance resumes and help build career profiles.
    </div>
  </div>
  
  <div class="icon-custom bottom-right-icon-custom">💡</div> 
</div>



</section>
    </>
   
  );
};

export default DetailsPhase2;
