import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faUsers, faChartLine } from '@fortawesome/free-solid-svg-icons';
import "./StratathonPhase2.css";
const Timeline = () => {
  return (
   <>
 <div id="timeline-container">
      <h2 id="timeline-heading">The Timeline</h2>
      <div id="timeline-wrapper">
        <div id="timeline-phase-1" className="timeline-phase">
          <div id="phase-circle-1" className="phase-circle">
            <FontAwesomeIcon icon={faLightbulb} className="icon" />
            <h3>Phase 1: Ideation & Planning (6 hours)</h3>
          </div>
          <p>Brainstorm, set up tools, and refine ideas with expert help.</p>
        </div>

        <div className="arrow">➔</div>

        <div id="timeline-phase-2" className="timeline-phase">
          <div id="phase-circle-2" className="phase-circle">
            <FontAwesomeIcon icon={faUsers} className="icon" />
            <h3>Phase 2: Development & Testing (12 hours)</h3>
          </div>
          <p>Build, test, and deploy the project.</p>
        </div>

        <div className="arrow">➔</div>

        <div id="timeline-phase-3" className="timeline-phase">
          <div id="phase-circle-3" className="phase-circle">
            <FontAwesomeIcon icon={faChartLine} className="icon" />
            <h3>Phase 3: Presentation & Wrap-up (4 hours)</h3>
          </div>
          <p>Prepare, present, and conclude with awards.</p>
        </div>
      </div>
    </div>

    </>
  

  )
}

export default Timeline