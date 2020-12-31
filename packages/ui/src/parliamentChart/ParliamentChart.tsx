import * as React from "react";
import { distributeSeats } from "./distributeSeats";

const ParliamentChart: React.FC = () => {
  return (
    <svg viewBox="0 0 600 400" width="400px" height="300px">
      {distributeSeats({
        seats: [],
        totalSeats: 460,
        opts: {
          innerR: 15,
          seatR: 4,
        },
        translateX: 200,
        translateY: 300,
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
