import { motion } from "framer-motion";

import "./home.css";
import AnimatedText from "../../widgets/animated-text/animatedText";
import SocialCard from "../../widgets/social-card/social-card";

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ duration: 10 }}
    >
      <div className="home-content">
        <h1 className="name-text">Anix Sam Saji</h1>
        <div className="job-text">
          <AnimatedText
            text={[
              "Full Stack Developer",
              "Photographer",
              "Video Editor",
              "Gamer",
              "Music Producer",
            ]}
            delay={3000}
          ></AnimatedText>
        </div>
        <div>
          <SocialCard
            links={{
              Github: "anixsam",
              Linkedin: "in/anixsamsaji",
              Facebook: "anix.sam",
              Instagram: "anix_sam_official",
              Twitter: "anix_sam",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
