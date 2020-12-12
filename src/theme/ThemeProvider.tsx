import * as React from "react";
import { ThemeContext, themeMap } from "./ThemeContext";

const ThemeProvider: React.FC = ({ children }) => {
  const [currentTheme, setTheme] = React.useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{ toggleTheme, theme: themeMap[currentTheme] }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
