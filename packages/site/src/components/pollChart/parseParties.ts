import { DhondtParliamentSeat } from "@ilemandatow/seats";
import { PartyWithResult } from "@ilemandatow/client";

export const parseParties = (
  parties: PartyWithResult[],
  seats: DhondtParliamentSeat[]
) => {
  return seats
    .filter(({ seats }) => seats > 0)
    .map(({ party: partyId, seats }) => {
      const result = parties.find((party) => party.id === partyId);
      const label = result?.name ?? "";
      const abbr = result?.abbr ?? "";
      const fill = result?.color ?? "";
      const order = result?.parliamentOrder ?? 5;
      return {
        id: partyId,
        label,
        abbr,
        value: seats,
        fill,
        order,
      };
    });
};
