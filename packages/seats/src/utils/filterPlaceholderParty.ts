import { ElectionResult } from "../types";
import { PLACEHOLDER_FILL_PARTY } from "./fillUndecidedVoters";

/**
 * Filters off placeholder party result.
 *
 * @param results election results
 */
export const filterPlaceholderParty = (results: ElectionResult[]) => {
  return results.filter(({ party }) => party !== PLACEHOLDER_FILL_PARTY);
};
