import * as React from "react";

interface Props {
  label: string;
  backgroundColor: string;
}

const LegendItem: React.FC<Props> = ({ label, backgroundColor }) => {
  return (
    <div className="flex items-center ma2">
      <div
        className="ma1 br1"
        style={{
          height: "10px",
          width: "10px",
          backgroundColor,
        }}
      />
      <div>{label}</div>
    </div>
  );
};

export default LegendItem;
