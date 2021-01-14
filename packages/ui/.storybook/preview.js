import "../styles/index.css";
import ThemeProvider from "../src/theme";
import UIProvider from "../src/uiProvider";

export const parameters = {
  layout: "centered",
};

export const decorators = [
  (Story) => (
    <UIProvider>
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    </UIProvider>
  ),
];
