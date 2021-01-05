import { distributeSeats } from "./distributeSeats";
import { getSeatsPerRow } from "./getSeatsPerRow";
import {
  ParliamentChartInput,
  ParliamentChartOpts,
  ParliamentChartRows,
} from "./types";

const defaultOpts: Required<ParliamentChartOpts> = {
  innerR: 20,
  seatR: 5,
  translateX: 0,
  translateY: 0,
};

/**
 * Gets coordinates, radius and fill of each seat.
 *
 * @param input chart input
 */
export const getSeatsCoords = ({
  parties,
  totalSeats,
  opts,
}: ParliamentChartInput): ParliamentChartRows => {
  const { innerR, seatR, translateX, translateY } = { ...defaultOpts, ...opts };
  const seatsPerRow = getSeatsPerRow(innerR, seatR, totalSeats);
  const partySeats = distributeSeats(parties, seatsPerRow, totalSeats);

  return seatsPerRow.map((numberOfSeats, i) => {
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
        r: seatR,
        fill: partySeats[i]?.[j] ?? "black",
      };
    });
  });
};
