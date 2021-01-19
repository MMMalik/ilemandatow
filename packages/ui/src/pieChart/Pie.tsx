import * as React from "react";
import { getCoords } from "./getCoords";

interface Props {
  /**
   * Chart pie color.
   */
  fill: string;
  /**
   * Background fill.
   */
  bgFill: string;
  /**
   * Chart radius.
   */
  R: number;
  /**
   * Start percentage value.
   */
  startValue: number;
  /**
   * End percentage value.
   */
  endValue: number;
  /**
   * Start point x.
   */
  startPointX: number;
  /**
   * Start point y.
   */
  startPointY: number;
  /**
   * Start point x.
   */
  endPointX?: number;
  /**
   * Start point y.
   */
  endPointY?: number;
}

const Pie: React.FC<Props> = ({
  fill,
  R,
  bgFill,
  startValue,
  endValue,
  startPointX,
  startPointY,
  endPointX = 0,
  endPointY = 0,
}) => {
  const [startX, startY] = getCoords(startPointX, startPointY, startValue);
  const [endX, endY] = getCoords(startPointX, startPointY, endValue);
  const start = `M ${startX} ${startY}`;
  const arc = `A ${R} ${R} 0 0 1 ${endX} ${endY}`;
  const end = `L ${endPointX} ${endPointY} Z`;

  return (
    <path
      strokeWidth={0.01 * R}
      stroke={bgFill}
      fill={fill}
      d={`${start} ${arc} ${end}`}
    />
  );
};

export default Pie;
