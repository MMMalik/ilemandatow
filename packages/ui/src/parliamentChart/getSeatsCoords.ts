import { distributeSeats } from "./distributeSeats";
import { getSeatsPerRow } from "./getSeatsPerRow";
import {
  ParliamentChartInput,
  ParliamentChartOpts,
  ParliamentChart,
} from "./types";

const defaultOpts: Required<ParliamentChartOpts> = {
  innerR: 20,
  seatR: 5,
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
}: ParliamentChartInput): ParliamentChart => {
  const { innerR, seatR } = { ...defaultOpts, ...opts };
  const seatsPerRow = getSeatsPerRow(innerR, seatR, totalSeats);
  const partySeats = distributeSeats(parties, seatsPerRow, totalSeats);

  let maxX = 0;

  const rows = seatsPerRow.map((numberOfSeats, i) => {
    const deltaRads = Math.PI / (numberOfSeats - 1);
    const initX = -innerR - seatR * 3 * i;
    const initY = 0;

    return Array.from({ length: numberOfSeats }).map((_, j) => {
      const nextRads = deltaRads * j;
      const x = initX * Math.cos(nextRads) + initY * Math.sin(nextRads);
      const y = initY * Math.cos(nextRads) + initX * Math.sin(nextRads);

      // Side-effect: assign max x coord
      maxX = x > maxX ? x : maxX;

      return {
        x,
        y,
        r: seatR,
        fill: partySeats[i]?.[j] ?? "black",
      };
    });
  });

  return {
    rows,
    maxX,
  };
};
