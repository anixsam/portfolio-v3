import {
  faHome as Home,
  faUser as About,
  faEnvelope as Mail,
  faNoteSticky as Resume,
  faCode as Skill,
  faServer as Service,
  faNavicon as Hamburger,
  faClose as Close,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { motion } from "framer-motion";

import "./navbar.css";
import NavItem from "./nav-item";

const NavBar = () => {
  const [navState, setNav] = useState(false);

  return (
    <>
      <div className="navbar">
        <nav>
          {navState ? (
            <>
              <NavItem to="/" icon={Home} delay="0.4" />
              <NavItem to="/about" icon={About} delay="0.6" />
              <NavItem to="/services" icon={Service} delay="0.8" />
              <NavItem to="/skills" icon={Skill} delay="1.0" />
              <NavItem to="/resume" icon={Resume} delay="1.2" />
              <NavItem to="/contact" icon={Mail} delay="1.4" />
            </>
          ) : (
            <></>
          )}
        </nav>
        <motion.div
          className="hamburger"
          onClick={() => setNav(!navState)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <FontAwesomeIcon icon={navState ? Close : Hamburger} />
        </motion.div>
      </div>
    </>
  );
};

export default NavBar;
