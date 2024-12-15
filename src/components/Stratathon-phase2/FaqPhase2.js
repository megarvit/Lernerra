import React, { useState } from "react";
import "./StratathonPhase2.css"
export const FaqPhase2 = () => {
    const faqData = [
        { question: "What is Stratathon?", answer: "Stratathon is a strategic hackathon designed to test and develop students' problem-solving, teamwork, and innovation skills. Participants will work on real-world challenges to create solutions using technology and strategic thinking." },
        { question: "Who can participate in Stratathon?", answer: "Stratathon is open to all students currently enrolled in college or university. Both undergraduates and graduates are welcome to participate, regardless of their academic background." },
        { question: "What is the format of the competition?", answer: "The competition is a team-based hackathon. Participants will form teams of 3-5 members and work together on a challenge presented at the start of the event. Teams will have a limited amount of time to research, brainstorm, and create their solutions." },
        { question: "Can I participate as an individual?", answer: "Stratathon is a team event, so you'll need to join a team to participate. However, if you don't have a team, we can help you find other solo participants to form one." },
        { question: "What skills do I need to participate?", answer: "Stratathon encourages a mix of skills. While having knowledge in areas like coding, design, and strategic thinking is helpful, we encourage students from all disciplines to join and bring their unique perspectives." }
      ];
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqContainer" id="sp2-faq">
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
