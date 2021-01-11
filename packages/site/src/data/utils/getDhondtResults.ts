import { dhondt } from "@ilemandatow/seats";
import { ELECTIONS_THRESHOLD, TOTAL_SEATS } from "../../constants";
import { PollResultFragment } from "../../types";

export const getDhondtResults = (results: PollResultFragment[]) => {
  return dhondt({
    results: results.map((r) => {
      return {
        party: r?.party?.id ?? "",
        votes: r?.result ?? 0,
      };
    }),
    threshold: ELECTIONS_THRESHOLD,
    totalSeats: TOTAL_SEATS,
  });
};
