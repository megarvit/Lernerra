import React, { useState } from "react";
import "./Course.css";

const reviewsData = [
  {
    id: 1,
    name: "Susana Balas",
    image: "/assets/Avatar 1.png",
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet ligula eget consectetuer an adipiscing elit aenean commodo ligula eget dolor. Aenean massa cum sociis natoque penatibuset magnis. Parturient montes nascetur ridiculus mus donec qua felis ultricies nec, pellentesque eu pretium quis sem Nulla consequat massa quis enim.",
  },
  {
    id: 2,
    name: "Susana Balas",
    image: "/assets/Avatar 2.png",
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet ligula eget consectetuer an adipiscing elit aenean commodo ligula eget dolor. Aenean massa cum sociis natoque penatibuset magnis. Parturient montes nascetur ridiculus mus donec qua felis ultricies nec, pellentesque eu pretium quis sem Nulla consequat massa quis enim.",
  },
  {
    id: 3,
    name: "Susana Balas",
    image: "/assets/Avatar 3.png",
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet ligula eget consectetuer an adipiscing elit aenean commodo ligula eget dolor. Aenean massa cum sociis natoque penatibuset magnis. Parturient montes nascetur ridiculus mus donec qua felis ultricies nec, pellentesque eu pretium quis sem Nulla consequat massa quis enim.",
  },
  {
    id: 4,
    name: "Susana Balas",
    image: "/assets/Avatar 7.png",
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet ligula eget consectetuer an adipiscing elit aenean commodo ligula eget dolor. Aenean massa cum sociis natoque penatibuset magnis. Parturient montes nascetur ridiculus mus donec qua felis ultricies nec, pellentesque eu pretium quis sem Nulla consequat massa quis enim.",
  },
  {
    id: 5,
    name: "Susana Balas",
    image: "/assets/Avatar 8.png",
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet ligula eget consectetuer an adipiscing elit aenean commodo ligula eget dolor. Aenean massa cum sociis natoque penatibuset magnis. Parturient montes nascetur ridiculus mus donec qua felis ultricies nec, pellentesque eu pretium quis sem Nulla consequat massa quis enim.",
  },
  {
    id: 6,
    name: "Susana Balas",
    image: "/assets/Avatar 9.png",
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet ligula eget consectetuer an adipiscing elit aenean commodo ligula eget dolor. Aenean massa cum sociis natoque penatibuset magnis. Parturient montes nascetur ridiculus mus donec qua felis ultricies nec, pellentesque eu pretium quis sem Nulla consequat massa quis enim.",
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalSlides = Math.ceil(reviewsData.length / itemsPerPage);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + totalSlides) % totalSlides
    );
  };

  return (
    <section className="reviewsSection" id="c_reviews">
      <h2 className="sectionTitle">Reviews</h2>
      <div className="reviewsContainer">
        <button className="carouselControl-left" onClick={prevReview}>
        &#10094;
        </button>
        <div className="reviewsCards">
          {reviewsData
            .slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)
            .map((review) => (
              <div className="reviewCard" key={review.id}>
                <img
                  src={review.image}
                  alt={review.name}
                  className="reviewImage"
                />
                <h3 className="reviewName">{review.name}</h3>
                <h4 className="reviewTitle">{review.title}</h4>
                <p className="reviewDescription">{review.description}</p>
              </div>
            ))}
        </div>
        <button className="carouselControl-right" onClick={nextReview}>
        &#10095;
        </button>
      </div>
      <div className="paginationDots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Reviews;

