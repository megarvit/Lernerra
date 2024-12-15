import React, { useState } from "react";
import "./Internship.css";

const faqData = [
  { question: "Lorem ipsum dolor sit amet ligula eget?", answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod." },
  { question: "Consectetuer the adipiscing?", answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod." },
  { question: "Elit aenean commodo ligula eget dolor?", answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod." },
  { question: "Aenean massa cum sociis penatibus?", answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod." },
  { question: "Ridiculus mus donec quam felis ultricies nec?", answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod." }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqContainer" id="I_faq">
      <h3 className="faqTitle">FAQ & Discussions</h3>
      <div className="faqList">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faqItem ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFaq(index)}
          >
            <div className="faqQuestion">
              {faq.question}
              <span className="icon">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="faqAnswer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;