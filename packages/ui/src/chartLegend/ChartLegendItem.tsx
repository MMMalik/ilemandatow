import * as React from "react";

interface ChartLegendItemProps {
  /**
   * Chart item label.
   */
  label: string;
  /**
   * Chart item background color.
   */
  fill: string;
}

const ChartLegendItem: React.FC<ChartLegendItemProps> = ({ label, fill }) => {
  return (
    <div className="flex items-center ma2">
      <div
        className="ma1 br1"
        style={{
          height: "10px",
          width: "10px",
          backgroundColor: fill,
        }}
      />
      <div>{label}</div>
    </div>
  );
};

export default ChartLegendItem;
