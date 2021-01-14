import { dhondt } from "@ilemandatow/seats";
import { ELECTIONS_THRESHOLD, TOTAL_SEATS } from "../../constants";

interface PartyResult {
  id?: string;
  result?: number;
}

export const getDhondtResults = (results: PartyResult[]) => {
  return dhondt({
    results: results.map((r) => {
      return {
        party: r.id ?? "",
        votes: r.result ?? 0,
      };
    }),
    threshold: ELECTIONS_THRESHOLD,
    totalSeats: TOTAL_SEATS,
  });
};
