import * as React from "react";
import { useTheme } from "../../dist";
import { sumPies } from "./sumPies";
import { PieChartPie } from "./types";
import Pie from "./Pie";

export interface PieChartProps {
  /**
   * List of pies.
   */
  pies: PieChartPie[];
  /**
   * Show as half pie.
   */
  halfPie?: boolean;
  /**
   * Show inner circle.
   */
  innerCircle?: boolean;
}

// Chart radius
const R = 1;

const PieChart: React.FC<PieChartProps> = ({
  pies,
  halfPie,
  innerCircle = true,
}) => {
  const { theme } = useTheme();
  const divider = halfPie ? 2 : 1;
  const transform = halfPie ? "rotate(-90deg)" : undefined;
  const bgFill = theme.chart.bgFill;

  return (
    <svg viewBox={`${-R} ${-R} ${2 * R} ${(2 * R) / divider}`} width="100%">
      <g style={{ transform }}>
        {pies.map(({ id, fill }, i) => {
          return (
            <Pie
              key={id}
              R={R}
              fill={fill}
              bgFill={bgFill}
              startPointX={0}
              startPointY={-1}
              startValue={sumPies(pies.slice(0, i), divider)}
              endValue={sumPies(pies.slice(0, i + 1), divider)}
            />
          );
        })}
      </g>
      {innerCircle && <circle fill={bgFill} cx={0} cy={0} r={R * 0.33} />}
    </svg>
  );
};

export default PieChart;
