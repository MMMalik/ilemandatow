import * as React from "react";
import { getSeatsCoords } from "./getSeatsCoords";
import { ParliamentChartParty } from "./types";

interface Props {
  parties: ParliamentChartParty[];
  totalSeats: number;
  innerR?: number;
}

const ParliamentChart: React.FC<Props> = ({
  totalSeats,
  parties,
  innerR = 50,
}) => {
  const { rows, maxX } = getSeatsCoords({
    parties,
    totalSeats,
    opts: {
      innerR,
    },
  });

  const vBoxMax = maxX * 2 * 1.2;

  return (
    <svg
      viewBox={`0 0 ${vBoxMax} ${vBoxMax * 0.75}`}
      width="100%"
      height="100%"
    >
      {rows.map((row, i) => {
        return (
          <g key={i}>
            {row.map(({ x, y, r, fill }, j) => {
              return (
                <circle
                  key={j}
                  style={{ fill }}
                  cx={x + vBoxMax / 2}
                  cy={y + vBoxMax / 2}
                  r={r}
                />
              );
            })}
          </g>
        );
      })}
    </svg>
  );
};

export default ParliamentChart;
