import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const skillsData = [
    { id: 1, title: "Stratethon Phase 2", description: "This is the description for stratetheon2.", image: "/assets/Image 30.png", route: "/stratethonphase2" },
    { id: 2, title: "Stratathon", description: "This is the description for stratethon.", image: "/assets/Image 29.png", route: "/stratethon" },
    { id: 3, title: "Internships", description: "This is the description for internships.", image: "/assets/Image 28.png", route: "/internship" },
    { id: 4, title: "Course 1", description: "This is the description for course 1.", image: "/assets/Image 30.png", route: "/course" },
    { id: 5, title: "Course 2", description: "This is the description for course 2.", image: "/assets/Image 30.png", route: "/course" },
];

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button className="slider-arrow next-arrow" onClick={onClick}>
    &#8250;
  </button>
);

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <button className="slider-arrow prev-arrow" onClick={onClick}>
    &#8249;
  </button>
);

const Skills = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => <div className="slick-dots">{dots}</div>, // Custom dots container
    responsive: [
    
      {
        breakpoint: 2000,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 }
      },

      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="pageContainer" id="skills">
      <header className="header2">
        <h1>Skills House</h1>
        <p>Learn more about our various skills and courses offered below.</p>
      </header>

      <img src="/assets/User circle plus 1.png" alt="Top Right" className="top-right-image" />

      {/* Slider with centered controls */}
      <Slider {...settings} className="skillContainer">
        {skillsData.map((skill) => (
          <div className="skill-card" key={skill.id}>
            <img src={skill.image} alt={skill.title} />
            <div className="skill-content">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className='skill-buttons'>
                <Link to={skill.route}>
                  <button className='learn-button'>Learn more</button>
                </Link>
                {skill.id === 1 && <button className="live-button">Live</button>}
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Arrows and dots container */}
      <div className="slider-controls">
        <PrevArrow />
        <div className="slick-dots"></div> {/* Dots go here */}
        {/* <NextArrow /> */}
      </div>
    </div>
  );
};

export default Skills;