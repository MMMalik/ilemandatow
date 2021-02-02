import { rotateCoords } from "../chart";
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
  dist: 2.4,
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
  const { innerR, dist, seatR } = { ...defaultOpts, ...opts };
  const seatsPerRow = getSeatsPerRow(innerR, seatR, totalSeats, dist);
  const partySeats = distributeSeats(parties, seatsPerRow, totalSeats);

  let maxX = 0;

  const flattened = seatsPerRow
    .map((numberOfSeats, i) => {
      const deltaRads = Math.PI / (numberOfSeats - 1);
      const initX = -innerR - seatR * dist * i;
      const initY = 0;

      return Array.from({ length: numberOfSeats }).map((_, j) => {
        const [x, y] = rotateCoords(initX, initY, deltaRads * j);

        // Side-effect: assign max x coord
        maxX = x > maxX ? x : maxX;

        return {
          x,
          y,
          r: seatR,
          id: partySeats[i]?.[j],
        };
      });
    })
    .reduce((acc, g) => acc.concat(g), []);

  return {
    groupedParties: parties.map((party) => {
      return {
        party,
        seats: flattened.filter((seat) => seat.id === party.id),
      };
    }),
    maxX,
  };
};
