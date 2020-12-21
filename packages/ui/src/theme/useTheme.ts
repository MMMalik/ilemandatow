import * as React from "react";
import { ThemeContext, ThemeContextType } from "./ThemeContext";

export const useTheme = (): ThemeContextType => {
  return React.useContext(ThemeContext);
};
