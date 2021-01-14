import * as React from "react";
import TooltipCmp, { TooltipProps } from "./Tooltip";

export const Tooltip = (args: TooltipProps) => {
  return <TooltipCmp {...args} />;
};
