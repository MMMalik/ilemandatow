import * as React from "react";
import { noOp } from "../utils";
import { light } from "./light";
import { dark } from "./dark";
import { Theme } from "./types";

export type ThemeName = "light" | "dark";

export interface ThemeContextType {
  name: ThemeName;
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  name: "light",
  theme: light,
  toggleTheme: noOp,
});

export const themeMap: { [key in ThemeName]: Theme } = {
  light,
  dark,
};
