import * as React from "react";
import PaperCmp, { PaperProps } from "./Paper";

export const Paper = (args: PaperProps) => {
  return <PaperCmp {...args} />;
};
