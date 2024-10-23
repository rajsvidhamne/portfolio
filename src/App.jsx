import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Clock from "./components/Clock";
import Aos from "aos";
import "aos/dist/aos.css";
import Calendar from "./components/Calendar";


const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/calendar" element={< Calendar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clock" element={<Clock />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
