import { motion } from "framer-motion";

import "./skill.css";

const Skill = () => {
  return (
    <motion.div
      className="skill"
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ duration: 10 }}
    >
      <div className="skill-head">
        <h1 className="skills-title">SKILLS</h1>
      </div>

      <div className="skill-content">
        
      </div>

    </motion.div>
  );
};

export default Skill;
