import * as React from "react";
import { ChartValue } from "../chart";
import { useTheme } from "../theme";
import Axes from "./Axes";
import { getBarChartCoords } from "./getBarChartCoords";

export interface BarChartProps {
  /**
   * List of bars.
   */
  bars: ChartValue[];
  /**
   * Bar margin.
   */
  barMargin?: number;
}

const BarChart: React.FC<BarChartProps> = ({ bars, barMargin = 0.1 }) => {
  const { theme } = useTheme();
  const { parsedBars, maxX, maxY } = getBarChartCoords(bars, {
    barMargin,
  });

  return (
    <svg viewBox={`0 0 ${maxX} ${maxY}`} width="100%">
      {parsedBars.map(({ id, fill, x, y, width, height }) => {
        return (
          <rect
            key={id}
            fill={fill}
            x={x}
            y={y}
            width={width}
            height={height}
          />
        );
      })}
      <Axes
        stroke={theme.chart.muted}
        startX={0}
        startY={maxY}
        endX={maxX}
        endY={0}
      />
    </svg>
  );
};

export default BarChart;
