import * as React from "react";
import ChipsListCmp, { ChipsListProps } from "./ChipsList";

export const ChipsList = (args: ChipsListProps) => {
  return <ChipsListCmp {...args} />;
};
