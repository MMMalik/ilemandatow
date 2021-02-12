import { DhondtParliamentSeat } from "@ilemandatow/seats";
import { PartyWithResult } from "@ilemandatow/client";

export const parseParties = (
  parties: PartyWithResult[],
  seats: DhondtParliamentSeat[],
  totalSeats: number
) => {
  return seats
    .filter(({ seats }) => seats > 0)
    .map(({ party: id, seats }, i) => {
      const result = parties.find((party) => party.id === id);
      return {
        ...result,
        id: id ?? String(i),
        abbr: result?.abbr ?? "",
        label: result?.name ?? "",
        color: result?.color ?? "",
        seats,
        seatsPerc: (seats * 100) / totalSeats,
      };
    });
};
