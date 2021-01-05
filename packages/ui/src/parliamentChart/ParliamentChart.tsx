import * as React from "react";
import { getSeatsCoords } from "./getSeatsCoords";

const ParliamentChart: React.FC = () => {
  return (
    <svg viewBox="0 0 800 400" width="500px">
      {getSeatsCoords({
        parties: [
          { label: "1", fill: "blue", seats: 149 },
          { label: "2", fill: "red", seats: 45 },
          { label: "2.5", fill: "green", seats: 5 },
          { label: "3", fill: "yellow", seats: 10 },
          { label: "4", fill: "pink", seats: 50 },
          { label: "1.5", fill: "silver", seats: 3 },
          { label: "5", fill: "magenta", seats: 198 },
        ],
        totalSeats: 460,
        opts: {
          innerR: 50,
          seatR: 5.5,
          translateX: 400,
          translateY: 300,
        },
      }).map((row, i) => {
        return (
          <g key={i}>
            {row.map(({ x, y, r, fill }, j) => {
              return <circle key={j} style={{ fill }} cx={x} cy={y} r={r} />;
            })}
          </g>
        );
      })}
    </svg>
  );
};

export default ParliamentChart;
