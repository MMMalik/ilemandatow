import {
  applyThreshold,
  fillUndecidedVoters,
  filterPlaceholderParty,
} from "../utils";
import { getQuotients } from "./getQuotients";
import { groupQuotients } from "./groupQuotients";
import { DhondtElection, DhondtParliamentSeat } from "./types";

/**
 * Distributes seats among parties based on D'Hondt method.
 *
 * @param election election results
 */
export const dhondt = ({
  results,
  threshold,
  totalSeats,
  fillMissingPerc,
}: DhondtElection): DhondtParliamentSeat[] => {
  const grouped = groupQuotients(
    getQuotients(
      filterPlaceholderParty(
        applyThreshold(
          fillMissingPerc ? fillUndecidedVoters(results) : results,
          threshold
        )
      ),
      totalSeats
    )
  );
  return results.map((result) => {
    const { party } = result;
    return {
      party,
      seats: grouped[party] ? grouped[party].seats : 0,
      init: result,
    };
  });
};
