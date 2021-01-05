import * as React from "react";

interface Props {
  fill: string;
  cx: number;
  cy: number;
  r: number;
}

const commonStyle = {
  /**
   * Fill empty spaces with transparent stroke.
   */
  stroke: "transparent",
  strokeWidth: "12px",
};

const Seat: React.FC<Props> = ({ fill, cx, cy, r }) => {
  return <circle style={{ fill, ...commonStyle }} cx={cx} cy={cy} r={r} />;
};

export default Seat;
