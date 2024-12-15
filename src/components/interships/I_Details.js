import React from "react";
import "./Internship.css";
import data from "../../data/data.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAward,
   faBuilding,
   faGift,
   faPeopleArrows,
   faRocket,
   faUserGraduate
} from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  faUserGraduate: faUserGraduate,
  faGift: faGift,
  faAward: faAward,
  faBuilding: faBuilding,
  faPeopleArrows: faPeopleArrows,
  faRocket: faRocket,
};

const Details = () => {

  return (
    <div className="internship-container" id="I_details">
      <section>
        <h1>Details</h1>

        <div className="objective-section">
          <h2>Objective</h2>
          <p>
            Strategyz is offering an exciting internship opportunity for the
            students. This program is designed to provide valuable industry
            experience and professional growth.
          </p>
          <div className="overview">
            <div className="o-content">
              <h3>Internship Details</h3>
              <ul>
                <li>Duration: 2 months</li>
                <li>
                  Performance-based placement assistance to get permanent
                  opportunities or offers from Fortune 500 clients.
                </li>
                <li>
                  xposure to work in practical work environment and support live
                  projects.
                </li>
              </ul>
            </div>
            <div className="o-content">
              <h3>Who can apply</h3>
              <ul>
                <li>
                  Students currently enrolled in 2nd or 3rd Year of University.
                </li>
                <li>
                  Individuals passionate about developing their skills in a
                  professional environment.
                </li>
                <li>
                  Candidates with a strong interest in software development,
                  business strategy, and innovation.
                </li>
                <li>
                  Students can reach out to there college representatives/
                  Placement Cell for applyin
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h2>Internship Phases</h2>
        <div className="phases-section">
          <div className="phase-star" >🌟</div>
          <div className="card01-list">
            {data.InternshipPhases.map((phase,index) => (
              <div key={phase.id} className={`card01 card01-${index}`}>
                <div className="card01-header">
                  <h5>{phase.title}</h5>
                  <h6>{phase.subtitle}</h6>
                </div>
                <div className="card01-content">
                  <div className="card01-img-container">
                    <img src={phase.image} alt="Icon" className="card01-image" />
                  </div>
                  <p>{phase.description1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="perks">
        <h2>Star Perks</h2>
        <div className="perks-container">
          <div className="new-section-container">
            <div className="left-column">
              {data.InternshipPerks.slice(0, 3).map((perks) => (
                <div className="reward-container">
                  <div key={perks.id} className="perks-card">
            
                    <h5>{perks.title}</h5>
                  </div>

                  <img src="/assets/oval 1.png" className="oval-img" />
                  <div className="perks-image">
                  <FontAwesomeIcon icon={iconMap[perks.image]} size="2x" />
                  </div>
                </div>
              ))}
            </div>
            <div className="center-box">
              <img src="assets\rewards.png" alt="image"></img>
            </div>
            <div className="right-column">
              {data.InternshipPerks.slice(3, 6).map((perks) => (
                <div className="reward-container" key={perks.id}>
                  <div className="perks-card">
                
                    <h5>{perks.title}</h5>
                  </div>
                  <img src="/assets/oval 1.png" className="oval-img" />
                  <div
                    className={"perks-image"}
                  >
                    <FontAwesomeIcon icon={iconMap[perks.image]} size="2x" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
