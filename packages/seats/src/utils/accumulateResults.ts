import { ElectionResult } from "../types";

/**
 * Accumulates results for parties. For instance, if there are multiple items for one party, results will be accumulated.
 * It guarantees that resulting list will have unique items.
 *
 * @param results election results
 */
export const accumulateResults = (
  results: ElectionResult[]
): ElectionResult[] => {
  return results.reduce((acc, r) => {
    const found = acc.find((a) => a.party === r.party);
    if (found) {
      found.votes += r.votes;
    } else {
      acc.push({
        ...r,
      });
    }
    return acc;
  }, [] as ElectionResult[]);
};
