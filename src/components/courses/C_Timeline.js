import React from 'react'
import "./Course.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faDatabase, faLaptopCode, faServer } from '@fortawesome/free-solid-svg-icons';
 
 
 
function Timeline() {
    return (
        <>
            <div id="c-timeline-container">
                <h2 id="c-timeline-heading">Four-Year Roadmap for B.Tech Placements</h2>
                <div id="c-timeline-wrapper">
                    <div id="c-timeline-phase-1" className="timeline-phase">
                        <div id="c-phase-circle-1" className="phase-circle">
                        <FontAwesomeIcon icon={faFileCode} className="icon1" />
                            <h3>1st Year</h3>
                        </div>
                        <p>Foundation in Programming and Development</p>
                    </div>
 
                    <div className="arrow1">➔</div>
 
                    <div id="c-timeline-phase-2" className="timeline-phase">
                        <div id="c-phase-circle-2" className="phase-circle">
                        <FontAwesomeIcon icon={faServer} className="icon1" />
                            <h3>2nd Year</h3>
                        </div>
                        <p>DSA and Development Phase 1</p>
                    </div>
 
                    <div className="arrow1">➔</div>
 
                    <div id="c-timeline-phase-3" className="timeline-phase">
                        <div id="c-phase-circle-3" className="phase-circle">
                        <FontAwesomeIcon icon={faDatabase} className="icon1" />
                        <h3>3rd Year</h3>
                        </div>
                        <p>DSA and Development Phase 2</p>
                    </div>
 
                    <div className="arrow1">➔</div>
 
                    <div id="c-timeline-phase-4" className="timeline-phase">
                        <div id="c-phase-circle-4" className="phase-circle">
                        <FontAwesomeIcon icon={faLaptopCode} className="icon1" />
                            <h3>4th Year</h3>
                        </div>
                        <p>Interview Preparation</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Timeline