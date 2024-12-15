import {React, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/autoplay"; 
import { Autoplay } from "swiper/modules"; 
import "./Career.css";

import {
  FaUserGraduate,
  FaClipboardList,
  FaPen,
  FaRegHandshake,
  FaBriefcase,
  FaSearch,
} from "react-icons/fa"; 
import Footer from "../footer/Footer";
import Gallery from "./Gallery";
import CareerNavbar from "./CareerNavbar";

const services = [
  {
    title: "Discover Your Interests",
    description:
      "Uncover your strengths, passions, and hobbies with our expert guidance. We use proven tools and activities to help you identify career paths that align with your unique interests and talents.",
    icon: <FaUserGraduate />,
  },
  {
    title: "Choose the Right Stream",
    description:
      "Get personalized advice on selecting the most suitable academic stream after 10th grade. Our counselors help match your skills and goals to the right stream, ensuring a strong foundation for your future.",
    icon: <FaClipboardList />,
  },
  {
    title: "Prepare for Entrance Exams",
    description:
      "Ace competitive exams with our tailored preparation plans. We provide mock tests, time management strategies, and expert tips to help you excel in exams like JEE, NEET, and more.",
    icon: <FaPen />,
  },
  {
    title: "Build a Strong Foundation",
    description:
      "Develop key skills such as critical thinking, communication, and problem-solving. Our programs prepare you for academic success and equip you for challenges in higher education and beyond.",
    icon: <FaRegHandshake />,
  },
  {
    title: "Explore Career Opportunities",
    description:
      "Learn about diverse career options and industries with our in-depth guidance. We help you understand what it takes to succeed in fields that align with your strengths and ambitions.",
    icon: <FaBriefcase />,
  },
  {
    title: "Academic and Personal Guidance",
    description:
      "Overcome academic pressures and personal challenges with our support. We offer strategies to improve time management, balance studies, and build resilience for holistic growth.",
    icon: <FaSearch />,
  },
];

const Career = () => { 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div id="main_career">
      <CareerNavbar />
      <section>
        <div id="Career-main-container">
          <div className="upper-container"></div>
          <div className="lower-container"></div>

          <div className="content-container">
            <div className="career-heading-data">
              <div className="middle-container">
                <p className="label">Career+</p>
                <div className="inside-middle"></div>
              </div>
              <h1>Your Journey to a Fulfilling Career Starts Here</h1>
              <p>
                Unlock your potential with personalized career counseling
                designed to guide you toward a path that aligns with your
                passions, skills, and goals. Whether you're just starting out or
                looking to make a change, we're here to help you navigate your
                career journey.
              </p>
              <button className="cta-button">Get Started</button>
            </div>
            <div className="career-heading-img">
              <img src="assets/header22.png" alt="Career Counseling Image" />
            </div>
          </div>
        </div>
      </section>
      <section id="our-services">
        <h2 className="section-title">Our Services</h2> 
        <Swiper
          modules={[Autoplay]} // Add Autoplay module here
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000 }} // Set delay for autoplay
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section id="grid-section">
        <div id="heading-div">
          <h3>What Are You Struggling With?</h3>
          <p>
            Eu orci sed nulla mattis id fermentum rhoncus enim eleifend
            ultricies erat libero eu aliquam mauris vitae magna elementum
            egestas.
          </p>
        </div>
        <div id="content-div">
          <div id="first-div">{/* Only background image here */}</div>
          <div id="second-div">
            <div id="card-1" className="card">
              <span className="card-number">01</span>
              <h3>Time Management</h3>
              <p>
                Lacinia blandit eget nibh sodales ornare magna risus auctor
                justo
              </p>
            </div>
            <div id="background-card" className="card">
              <span className="card-number">02</span>
              <h3>Life Goals</h3>
              <p>
                Amet non lobortis mi amet leo et nam facilisi elementum
                ultricies.
              </p>
            </div>
            <div id="card-3" className="card">
              <span className="card-number">03</span>
              <h3>Accountability</h3>
              <p>
                Amet non lobortis mi amet leo et nam facilisi elementum
                ultricies.
              </p>
            </div>
            <div id="card-4" className="card">
              <span className="card-number">04</span>
              <h3>Staying Organized</h3>
              <p>
                Sodales id ullamcorper neque imperdiet leo, fames massa ipsum
                erat quisque
              </p>
            </div>
          </div>
        </div>
      </section>
      <Gallery />

      {/* Additional section  */}
      <section id="responsive-section">
        <div id="content">
          <div id="left">
            <h3>
              Gain Control of Your Life and Find the Balance You Need to
              Succeed!
            </h3>
          </div>
          <div id="right">
            <p>
              Gravida egestas feugiat at ultrices ornare pulvinar montes, tempus
              vel nulla sed mi feugiat integer volutpat pellentesque aliquet non
              est ullamcorper laoreet mattis tristique quam mi proin magna
              porttitor ornare posuere nisi neque et suspendisse viverra.
            </p>
          </div>
        </div>

        <div id="image-and-cards-section">
          <div id="image-container">
            <img
              src="\assets\Image 13.png"
              alt="career-image"
              id="responsive-image"
            />
            <div id="cards">
              <div className="card" id="career_card">
                <span className="card-number">01</span>
                <h3>Reduce Anxiety & Stress</h3>
                <p>
                  Facilisis pulvinar at senectus vel amet, dui arcu augue
                  consectetur tellus sagittis dolor.
                </p>
              </div>
              <div className="card" id="career_card">
                <span className="card-number">02</span>
                <h3>Improve Mental Health</h3>
                <p>
                  Curabitur pretium tincidunt felis, sit amet bibendum urna
                  lobortis eu. Nullam rutrum.
                </p>
              </div>
              <div className="card" id="career_card">
                <span className="card-number">03</span>
                <h3>Boost Confidence</h3>
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae.
                </p>
              </div>
              <div className="card" id="career_card">
                <span className="card-number">04</span>
                <h3>Enhance Focus</h3>
                <p>
                  Nullam sollicitudin leo nec magna elementum, eu placerat
                  tortor suscipit. Mauris pretium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Career;
