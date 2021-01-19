import * as React from "react";

export interface Props {
  startX: number;
  endX: number;
  startY: number;
  endY: number;
  stroke?: string;
}

const Axes: React.FC<Props> = ({ startX, startY, endX, endY, stroke }) => {
  const style = { stroke, strokeWidth: endX * 0.01 };

  return (
    <g>
      <path d={`M ${startX} ${startY} L ${startX} ${endY}`} style={style} />
      <path d={`M ${startX} ${startY} L ${endX} ${startY}`} style={style} />
    </g>
  );
};

export default Axes;
