import * as React from "react";
import ChartLegendCmp from "./ChartLegend";
import ChartLegendItem from "./ChartLegendItem";

export const ChartLegend = () => {
  return (
    <ChartLegendCmp>
      <ChartLegendItem label="Party 1" fill="blue" />
      <ChartLegendItem label="Party 2" fill="red" />
      <ChartLegendItem label="Party 3" fill="green" />
    </ChartLegendCmp>
  );
};
