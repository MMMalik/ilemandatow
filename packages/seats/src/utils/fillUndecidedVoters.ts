import { ElectionResult } from "../types";
import { sumVotes } from "./sumVotes";

export const PLACEHOLDER_FILL_PARTY = "___placeholder";

/**
 * Assumes that results are provided in %. If sum is < 100%, then adds placeholder to fill in missing values.
 *
 * @param results election results
 */
export const fillUndecidedVoters = (results: ElectionResult[]) => {
  const totalVotes = sumVotes(results);
  if (totalVotes < 100) {
    return results.concat({
      party: PLACEHOLDER_FILL_PARTY,
      votes: 100 - totalVotes,
    });
  }
  return results;
};
