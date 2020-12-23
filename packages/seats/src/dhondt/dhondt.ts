import { getQuotients } from "./getQuotients";
import { groupQuotients } from "./groupQuotients";
import { Election, ParliamentSeat } from "./types";

export const dhondt = (election: Election): ParliamentSeat[] => {
  const grouped = groupQuotients(getQuotients(election));
  return election.results
    .map(({ party }) => ({
      party,
      seats: grouped[party] ? grouped[party].seats : 0,
    }))
    .sort((r1, r2) => {
      const seatsA = r1.seats;
      const seatsB = r2.seats;
      return seatsB - seatsA;
    });
};
