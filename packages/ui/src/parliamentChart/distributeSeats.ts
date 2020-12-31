import { getSeatsPerRow } from "./getSeatsPerRow";
import { ParliamentChartInput, ParliamentChartRows } from "./types";

export const distributeSeats = ({
  seats,
  opts,
  totalSeats,
}: ParliamentChartInput): ParliamentChartRows => {
  const { innerR, seatR } = opts;
  const seatsPerRow = getSeatsPerRow(innerR, seatR, totalSeats);
  return [];
};
