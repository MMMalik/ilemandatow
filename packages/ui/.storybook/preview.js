import "../styles/index.css";
import ThemeProvider from "../src/theme";

export const parameters = {
  layout: "centered",
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
