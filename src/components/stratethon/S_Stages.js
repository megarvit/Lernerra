import React from "react";
import "./Stratethon.css";
import stages from "../../data/data.json";

const Stages = () => {
  return (
    <div className="stages-container" id="stages">
      <h1>Stages and Timelines</h1>
      <img
        src="/assets/User circle plus 1.png"
        alt="Stage 1"
        className="plus1"
      />
      <div className="stage-grid">
        {stages.stage_card.map((stage_card) => (
          <div key={stage_card.id} className="stage-card">
            <img
              src={stage_card.icon}
              alt={` ${stage_card.id}`}
              className="state-icon"
            />
            <div className="statecard_text">
              <h2 className="stage-title">{stage_card.title}</h2>
              <p className="stage-description">{stage_card.description}</p>
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
                <div class="day">14</div>
                <div class="month">Oct 24</div>
              </div>
              <div className="circle-top"></div>
              <div className="line"></div>
              <div className="circle-bottom"></div>
            </div>
            <div className="stage-text">
              <h3>Idea Praposal</h3>
              <ul>
                <li>Submit a detailed plan or idea.</li>
                <li>Receive feedback from industry experts.</li>
              </ul>
              <p className="p1">Start: 14 Oct 24 10:30am 1st</p>
              <p className="p2">End : 21 Oct 24 05:30pm 1st</p>
            </div>
          </div>
        </div>
      </div>
      <div className="stage-grid2">
        <div className="stage-card">
          <img src="/assets/statea.png" alt="stage 2" className="state-icon" />
          <h2 className="stage-title">Stage 2</h2>
          <p className="stage-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                <div class="day">21</div>
                <div class="month">Oct 24</div>
              </div>
              <div className="circle-top"></div>
              <div className="line"></div>
              <div className="circle-bottom"></div>
            </div>
            <div className="stage-text">
              <h3>Project Status Assesment</h3>
              <ul>
                <li>Develop your project and present status updates.</li>
                <li>Interim evaluations for project tracking.</li>
                <li>
                  Receive support and guidance to keep your project on track.
                </li>
              </ul>
              <p className="p1">Start: 21 Oct 24 06:30pm 1st</p>
              <p className="p2">End : 11 Nov 24 06:30pm 1st</p>
            </div>
          </div>
        </div>
      </div>

      <div className="stage-grid3">
        <div className="stage-card">
          <img src="/assets/stateb.png" alt="stage 2" className="state-icon" />
          <h2 className="stage-title">Stage 3</h2>
          <p className="stage-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                <div class="day">11</div>
                <div class="month">Nov 24</div>
              </div>
              <div className="circle-top"></div>
              <div className="line"></div>
              <div className="circle-bottom"></div>
            </div>
            <div className="stage-text">
              <h3>Project Status Assesment</h3>
              <ul>
                <li>Complete your project and submit for final review.</li>
                <li>Showcase your project to a panel of judges.</li>
                <li>
                  Get continuous support and expert guidance to perfect you
                  project.
                </li>
              </ul>

              <p className="p1">Start: 11 Nov 24 08:00pm 1st</p>
              <p className="p2">End : 09 Dec 24 10:30pm 1st</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stages;
