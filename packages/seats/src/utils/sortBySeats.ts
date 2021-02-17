import { ParliamentSeat } from "../types";

const compareResults = (
  { seats: seatsA, party: partyA, init: { votes: votesA } }: ParliamentSeat,
  { seats: seatsB, party: partyB, init: { votes: votesB } }: ParliamentSeat
) => {
  if (seatsA === seatsB) {
    if (votesA === votesB) {
      return partyA.localeCompare(partyB);
    }
    return votesB - votesA;
  }
  return seatsB - seatsA;
};

/**
 * Sorts seats distribution in parliament in a given direction.
 * Solves ties by sorting by initial votes, then alphabetically.
 *
 * @param results list of parties in parliament and number of seats they won
 * @param dir sort direction
 */
export const sortBySeats = (
  results: ParliamentSeat[],
  dir: "asc" | "desc" = "desc"
) => {
  return [...results].sort((r1, r2) => {
    return dir === "desc" ? compareResults(r1, r2) : compareResults(r2, r1);
  });
};
