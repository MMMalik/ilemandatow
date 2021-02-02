import * as React from "react";
import BarChartCmp, { BarChartProps } from "./BarChart";

export const BarChart = (args: BarChartProps) => {
  return <BarChartCmp {...args} />;
};
