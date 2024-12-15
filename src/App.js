import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Stratethon from "./components/stratethon/Stratethon";
import Courses from "./components/courses/Course";
import Internship from "./components/interships/Internship";
import StratathonPhase2 from "./components/Stratathon-phase2/StratathonPhase2";
import Career from "./components/Career+/Career";
import "./App.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Home | Lernerra";
        break;
      case "/stratethon":
        document.title = "Stratethon | Lernerra";
        break;
      case "/stratethonphase2":
        document.title = "Stratethon Phase 2 | Lernerra";
        break;
      case "/course":
        document.title = "Courses | Lernerra";
        break;
      case "/internship":
        document.title = "Internship Lernerra";
        break;
      case "/career":
        document.title = "Career | Lernerra";
        break;
      default:
        document.title = "Lernerra";
        break;
    }
  }, [location]);

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/stratethon" element={<Stratethon />} />
        <Route path="/stratethonphase2" element={<StratathonPhase2 />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </div>
  );
}

export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}
