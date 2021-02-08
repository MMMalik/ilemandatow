import { ParliamentSeat } from "../types";

/**
 * Sorts seats distribution in parliament in a given direction.
 * Solves ties by sorting alphabetically in descending order.
 *
 * @param results list of parties in parliament and number of seats they won
 * @param dir sort direction
 */
export const sortBySeats = (
  results: ParliamentSeat[],
  dir: "asc" | "desc" = "desc"
) => {
  return [...results].sort((r1, r2) => {
    const seatsA = r1.seats;
    const seatsB = r2.seats;
    if (seatsA === seatsB) {
      return r1.party.localeCompare(r2.party);
    }
    return dir === "desc" ? seatsB - seatsA : seatsA - seatsB;
  });
};
