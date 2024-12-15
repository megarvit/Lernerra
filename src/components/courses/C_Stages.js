import React from "react";
import "./Course.css";
import stages from "../../data/data.json";

const Stages = () => {
  return (
    <div className="stages-container" id="c_stage">
      <h1>Stages and Timelines</h1>
      <img
        src="/assets/User circle plus 1.png"
        alt="Stage 1"
        className="plus1"
      />
      <div className="stage-grid">
        {stages.course_stage_card.map((course_stage_card) => (
          <div key={course_stage_card.id} className="stage-card">
            <img
              src={course_stage_card.icon}
              alt={` ${course_stage_card.id}`}
              className="state-icon"
            />
            <div className="statecard_text">
              <h2 className="stage-title">{course_stage_card.title}</h2>
              <p className="stage-description">{course_stage_card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="stage">
        <img src="/assets/web 1.png" alt="Stage 1" className="stage-image" />
        <div className="stage-section">
          <h6 className=" stage-heading1">Stage1</h6>
          <div className="stage1">
            <div className="dot-container">
              <div class="date-card">
              <img src="/assets/teamformation.png" alt="Stage 1" className="card-icon" />               
              </div>
              <div className="circle-top"></div>
              <div className="line"></div>
              <div className="circle-bottom"></div>
            </div>
            <div className="stage-text">
              <h3>1st Year Students</h3>
              <ul>
                <li>Introduction to Programming Languages.</li>
                <li>Introduction to Development.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="stage-grid2">
        <div className="stage-card">
          <img src="/assets/statea.png" alt="stage 2" className="state-icon" />
          <h2 className="stage-title">2 Year</h2>
          <p className="stage-description">
            DSA & Development 1.
          </p>
        </div>
      </div>
      <div className="stage reverse">
        <img src="/assets/web 1.png" alt="Stage 2" className="stage-image" />
        <div className="stage-section">
          <h6 className=" stage-heading2">Stage2</h6>
          <div className="stage2">
            <div className="dot-container">
              <div class="date-card">
              <img src="/assets/problemstatement.png" alt="Stage 2" className="card-icon" />
              </div>
              <div className="circle-top"></div>
              <div className="line"></div>
              <div className="circle-bottom"></div>
            </div>
            <div className="stage-text">
              <h3>2nd Year Students</h3>
              <ul>
                <li>Strategyz Learning DSA.</li>
                <li>Development Lectures.</li>
                <li>Project Exhibition-I</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="stage-grid3">
        <div className="stage-card">
          <img src="/assets/stateb.png" alt="stage 2" className="state-icon" />
          <h2 className="stage-title">3 Year</h2>
          <p className="stage-description">
             DSA & Development 2.
          </p>
        </div>
      </div>
      <div className="stage">
        <img src="/assets/web3.png" alt="Stage 3" className="stage-image" />
        <div className="stage-section">
          <h6 className=" stage-heading3">Stage3</h6>
          <div className="stage3">
            <div className="dot-container">
              <div class="date-card">
              <img src="/assets/evaluation.png" alt="Stage 3" className="card-icon" />
              </div>
              <div className="circle-top"></div>
              <div className="line"></div>
              <div className="circle-bottom"></div>
            </div>
            <div className="stage-text">
              <h3>3rd Year Students</h3>
              <ul>
                <li>Strategyz Learning DSA sheet-II.</li>
                <li>Advance Development Lectures on.</li>
                <li>Project Exhibition-II</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="stage-grid4">
        <div className="stage-card">
          <img src="/assets/stated.png" alt="stage 2" className="state-icon" />
          <h2 className="stage-title">4 Year</h2>
          <p className="stage-description">
             Interview Prepration.
          </p>
        </div>
      </div>
      <div className="four reverse">
        <img src="/assets/web 1.png" alt="Stage 4" className="stage-image" />
        <div className="stage-section">
          <h6 className=" stage-heading4">Stage4</h6>
          <div className="stage4">
            <div className="dot-container">
              <div class="date-card">
              <img src="/assets/awards11.png" alt="Stage 4" className="card-icon" />
              </div>
              <div className="circle-top"></div>
              <div className="line"></div>
              <div className="circle-bottom"></div>
            </div>
            <div className="stage-text">
              <h3>4th Year Students</h3>
              <ul>
                <li>Interview Preparation.</li>
                <li>Internship opportunity.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stages;
