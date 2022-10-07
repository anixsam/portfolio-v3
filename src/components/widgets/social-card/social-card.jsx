import "../social-card/social-card.css";
import GetIcon from "../../libraries/get-icon";
import GetColor from "../../libraries/get-color";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialCard = ({ links }) => {
  let socials = Object.keys(links);
  let initialDelay = 1;
  return (
    <div className="social-card">
      <div className="social-card-ul">
        {socials.map((social, index) => {
          let delay = initialDelay + index * 0.5;
          return (
            <motion.li
              initial={{ y: "15px", opacity: "0" }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: `${delay}` }}
              className="social-card-li"
              key={btoa(social)}
            >
              <a
                href={`https://${social.toLowerCase()}.com/${links[social]}`}
                className="social-card-a"
                target="_blank"
                onMouseEnter={(e) => {
                  e.target.style.color = `${GetColor(social)}`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "black";
                }}
              >
                <FontAwesomeIcon icon={GetIcon(`${social}`)} />
              </a>
            </motion.li>
          );
        })}
      </div>
    </div>
  );
};

export default SocialCard;
