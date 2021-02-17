import { ElectionResult } from "../types";
import { sumVotes } from "./sumVotes";

/**
 * Calculates total number of votes and filters results for parties below specified % threshold.
 *
 * @param results election results
 * @param threshold threshold (%) to apply
 */
export const applyThreshold = (
  results: ElectionResult[],
  threshold?: number
) => {
  const totalVotes = sumVotes(results);
  return results.filter((r) =>
    threshold && !r.disableThreshold
      ? r.votes / totalVotes >= threshold / 100
      : true
  );
};
