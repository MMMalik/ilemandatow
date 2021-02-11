import * as React from "react";
import { SelectOption as SelectOptionType } from "./types";

export interface SelectContextValues {
  selected: SelectOptionType[];
}

export const SelectContext = React.createContext<SelectContextValues>({
  selected: [],
});
