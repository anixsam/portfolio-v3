import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const NavItem = (props) => {
  return (
    <motion.div animate={{ x: "0px" }} initial={{ x: "-200px" }} transition={{type:"spring",duration:`${props.delay}`}}>
      <NavLink end to={props.to} activeclassname="active">
        <FontAwesomeIcon icon={props.icon} />
      </NavLink>
    </motion.div>
  );
};

export default NavItem;
