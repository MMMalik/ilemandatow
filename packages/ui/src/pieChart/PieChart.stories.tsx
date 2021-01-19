import * as React from "react";
import PieChartCmp, { PieChartProps } from "./PieChart";

export const PieChart = (args: PieChartProps) => {
  return <PieChartCmp {...args} />;
};
