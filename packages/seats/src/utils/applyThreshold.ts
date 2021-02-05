import { ElectionResult } from "../types";

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
  const totalVotes = results.reduce((acc, r) => acc + r.votes, 0);
  return results.filter((r) =>
    threshold && !r.disableThreshold
      ? r.votes / totalVotes > threshold / 100
      : true
  );
};
