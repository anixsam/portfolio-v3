import { Routes, Route } from "react-router-dom";

import Home from "../Layout/Home/home";
import About from "./About/about";
import Contact from "./Contact/contact";
import Resume from "./Resume/resume";
import Service from "./Service/service";
import Skill from "./Skill/skill";
import AnimatedLogo from "../widgets/animated-logo/animated-logo";

import "./portfolio.css";

const PortFolio = () => {
  return (
    <div className="portfolio">
      <AnimatedLogo/>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default PortFolio;
