import {
  faInstagram,
  faFacebook,
  faGithub,
  faTwitter,
  faLinkedin,
  faYoutube,
  faPinterest,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";

const GetIcon = (iconName) => {
  switch (iconName) {
    case "Instagram":
      return faInstagram;
    case "Facebook":
      return faFacebook;
    case "Twitter":
      return faTwitter;
    case "Linkedin":
      return faLinkedin;
    case "Github":
      return faGithub;
    case "Youtube":
      return faYoutube;
    case "Pinterest":
      return faPinterest;
    case "Reddit":
      return faReddit;
  }
};

export default GetIcon;
