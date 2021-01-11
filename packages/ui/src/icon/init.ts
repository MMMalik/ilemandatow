import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faAdjust,
  faSearch,
  faBars,
  faTimes,
  faList,
  faTh,
  faSun,
  faMoon,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

config.autoAddCss = false;

library.add(
  faGithub,
  faAdjust,
  faSearch,
  faBars,
  faTimes,
  faList,
  faTh,
  faSun,
  faMoon,
  faExternalLinkAlt,
  faQuestionCircle
);
