import * as React from "react";

// Icons
import "./src/icons";

// Components
import "./src/translations";
import ThemeProvider from "./src/theme";

/* eslint-disable-next-line */
export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
