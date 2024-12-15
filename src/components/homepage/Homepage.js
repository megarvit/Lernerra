// homepage header component starts...here
import React,{useEffect} from "react";
import "../homepage/Homepage.css";
import Trusted from "./Trusted";
import Skills from "./Skills";
import Whatsnew from "./Whatsnew";
import Testemonial from "./Testemonial";
import Footer from "../footer/Footer";
import Navigation from "../navigationBar/Navigation";
const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensures page starts at the top on reload
 }, []);
  return (
    <>
     <Navigation />
      <div className="homepage-container" id="home">
        <div className="section-main">
          <div className="container-text">
            <p className="business-trust">
              +55,000 <span>BUSINESS TRUST</span>
            </p>
          </div>
          <div className="wss-section-bg">
            <div className="wss-skilled-main">
              <div className="wss-main-text">
                <div className="wss-sec-text">
                  <h1 className="get-ready">
                    Get Ready To Be
                    <span className="skilled"> SKILLED </span>
                  </h1>
                  <p>
                    Empowering individuals to unlock their potential through
                    expert-led learning. Fostering a culture of continuous
                    growth and innovation.
                  </p>
                </div>
                <div className="wss-btn-main">
                  <div className="badge-one">
                    <a className="bdge-one-link" href="">
                      24/7
                    </a>
                  </div>
                  <div className="badge-two">
                    <a className="bdge-one-link" href="">
                      Chat Support
                    </a>
                  </div>
                  <div className="badge-three">
                    <a className="bdge-one-link" href="">
                      Skills
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="badge-one">
              <a className="bdge-one-link" href="">
                24/7
              </a>
            </div>
            <div className="badge-two">
              <a className="bdge-one-link" href="">
                Chat Support
              </a>
            </div>
            <div className="badge-three">
              <a className="bdge-one-link" href="">
                Skills
              </a>
            </div>
          </div>
          <div className="container-img">
            <img src="/assets/back-circle.png" alt="Group 1" />
          </div>
          <div className="container-image">
            <img src="\assets\Image 40.png" alt="Group 1" />
          </div>
          <div className="wss-support">
            <div class="avatar-circle">
              <div class="avatar-item">
                <img src="\assets\Avatar 1.png" alt="Avatar1" />
              </div>
              <div class="avatar-item">
                <img src="\assets\Avatar 2.png" alt="Avatar2" />
              </div>
              <div class="avatar-item">
                <img src="\assets\Avatar 3.png" alt="Avatar3" />
              </div>
              <div class="avatar-item">
                <img src="\assets\Avatar 4.png" alt="Avatar4" />
              </div>
              <div class="avatar-item">
                <img src="\assets\Avatar 5.png" alt="Avatar5" />
              </div>
              <div class="support-text">
                <p class="support">
                  +Future <span>Support Ready</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
          <Trusted />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Testemonial />
        </div>
        <div>
          <Whatsnew />
        </div>
        <Footer />
    </>
  );
};

export default Homepage;

//Homepage header component end....here
