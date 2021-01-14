import { getQuotients } from "./getQuotients";
import { groupQuotients } from "./groupQuotients";
import { DhondtElection, DhondtParliamentSeat } from "./types";

export const dhondt = (election: DhondtElection): DhondtParliamentSeat[] => {
  const grouped = groupQuotients(getQuotients(election));
  return election.results.map(({ party }) => ({
    party,
    seats: grouped[party] ? grouped[party].seats : 0,
  }));
};
