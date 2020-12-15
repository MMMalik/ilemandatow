import * as React from "react";

// Css
import "fontsource-lato";
import "tachyons/css/tachyons.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./src/styles/layout.css";
import "./src/styles/animate.css";
import "./src/styles/visibility.css";
import "./src/styles/box-shadow.css";
import "./src/styles/tooltip.css";

// Icons
import "./src/icons";

// Components
import "./src/translations";
import ThemeProvider from "./src/theme";

/* eslint-disable-next-line */
export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
