import React, { useState } from "react";
import "./Course.css";

const faqData = [
  { question: "What prerequisites do I need to take a course in web development or machine learning?", answer: "For web development, you typically need basic knowledge of HTML, CSS, and JavaScript. For machine learning, a strong understanding of mathematics, especially linear algebra and statistics, is helpful, along with knowledge of programming languages like Python." },
  { question: "How long do the courses last, and what is the learning format?", answer: "Course durations vary depending on the program, but most online courses can last from a few weeks to a few months. The format may include video lectures, hands-on projects, assignments, and live sessions or webinars for interaction with instructors." },
  { question: "Do I get a certificate after completing the course?", answer: "Yes, many companies offer certificates upon course completion, which can be useful for your resume. However, the value of the certificate depends on the reputation of the course provider." },
  { question: "What kind of support will I get during the course?", answer: "Support may include access to tutors, online discussion forums, peer collaboration groups, and Q&A sessions. Some courses also offer mentorship or project reviews to help you understand the material better." },
  { question: "Can I get a job after completing the course?", answer: "While completing a course in web development or machine learning can enhance your skills and increase job opportunities, securing a job also depends on your ability to apply what you’ve learned, your experience, and your personal initiative in applying to jobs or internships. Many courses also provide career services, resume building, or job placement assistance." }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqContainer" id="c_faq">
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