import React from "react";
import "./Stratethon.css";
import data from "../../data/data.json";
const Details = () => {
  return (
    <div className="hackathon-container" id="details">
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

        <div className="guidelines-section">
          <h2>Guidelines</h2>
          <div className="card1-list">
            {data.Guidelines.map((guideline) => (
              <div key={guideline.id} className="card1">
                <h5>{guideline.title}</h5>
                <div className="card1-content">
                  <div className="card1-img-container">
                    <img
                      src={guideline.image}
                      alt="Icon"
                      className="card1-image"
                    />
                  </div>
                  <ul>
                    {guideline.description1 && (
                      <li>{guideline.description1}</li>
                    )}
                    {guideline.description2 && (
                      <li>{guideline.description2}</li>
                    )}
                    {guideline.description3 && (
                      <li>{guideline.description3}</li>
                    )}
                    {guideline.description4 && (
                      <li>{guideline.description4}</li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rules-section">
          <h2>Rules</h2>
          <div className="card1-list">
            {data.Rules.map((rule) => (
              <div key={rule.id} className="card1">
                <h5>{rule.title}</h5>
                <div className="card1-content">
                  <div className="card1-img-container">
                    <img src={rule.image} alt="Icon" className="card1-image" />
                  </div>
                  <ul>
                    {rule.description1 && <li>{rule.description1}</li>}
                    {rule.description2 && <li>{rule.description2}</li>}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prizes">
        <h1>Prizes and Rewards</h1>
        <div className="prize-container">
          <div className="new-section-container">
            <div className="left-column">
              {/* Map rewards for the left column */}
              {data.Rewards.slice(0, 2).map((reward) => (
                <div className="reward-container">
                  <div key={reward.id} className="reward-card">
                    <h5>{reward.title}</h5>
                    <h6>{reward.subtitle}</h6>
                    <p>{` ${`\u20B9`} ${reward.price}`}</p>
                  </div>

                  <img src="/assets/oval 1.png" className="oval-img" />
                  <div className="reward-image">
                    <img src={reward.image} alt="img" />
                  </div>
                </div>
              ))}
            </div>
            <div className="center-box">
              <img src="assets\rewards.png" alt="image"></img>
            </div>
            <div className="right-column">
              {/* Map rewards for the right column */}
              {data.Rewards.slice(2, 4).map((reward, index) => (
                <div className="reward-container" key={reward.id}>
                  <div className="reward-card">
                    <h5>{reward.title}</h5>
                    <h6>{reward.subtitle}</h6>
                    {/* Conditionally render the rupee sign */}
                    <p>
                      {
                        index === data.Rewards.slice(2, 4).length - 1
                          ? "" 
                          : `${`\u20B9`} ${reward.price}` 
                      }
                    </p>
                  </div>
                  <img src="/assets/oval 1.png" className="oval-img" />
                  <div
                    className={`reward-image ${
                      reward.id === 4 ? "reward-image-4" : ""
                    }`}
                  >
                    <img src={reward.image} alt="img" />
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
