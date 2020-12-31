import { getSeatsPerRow } from "./getSeatsPerRow";
import { ParliamentChartInput, ParliamentChartRows } from "./types";

export const distributeSeats = ({
  opts,
  totalSeats,
  translateX,
  translateY,
}: ParliamentChartInput): ParliamentChartRows => {
  const { innerR, seatR } = opts;
  return getSeatsPerRow(innerR, seatR, totalSeats).map((numberOfSeats, i) => {
    const deltaRads = Math.PI / (numberOfSeats - 1);
    const initX = -innerR - seatR * 3 * i;
    const initY = 0;
    return Array.from({ length: numberOfSeats }).map((_, j) => {
      const nextRads = deltaRads * j;
      const x = initX * Math.cos(nextRads) + initY * Math.sin(nextRads);
      const y = initY * Math.cos(nextRads) + initX * Math.sin(nextRads);
      return {
        x: x + translateX,
        y: y + translateY,
        fill: "black",
        r: seatR,
      };
    });
  });
};
