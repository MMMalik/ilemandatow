import { accumulateResults, applyThreshold } from "../utils";
import { dhondt } from "./dhondt";
import { DhondtElectionByDistrict, DhondtParliamentSeat } from "./types";

/**
 * Calculates overall results of an election based on results in each district.
 * Each district has separate results, possibly with different number of seats to distribute and optional districtal threshold.
 * Global threshold can be applied too, in which case seats in a district are not distributed among parties below that global threshold.
 *
 * @param input input for calculations
 */
export const dhondtByDistricts = ({
  resultsByDistrict,
  globalThreshold,
}: DhondtElectionByDistrict): DhondtParliamentSeat[] => {
  // Gets parties above global threshold.
  const aboveThreshold = applyThreshold(
    accumulateResults(
      resultsByDistrict
        .map((r) => r.results)
        .reduce((acc, r) => acc.concat(r), [])
    ),
    globalThreshold
  );
  // Calculates d'Hondt for each district only for parties above global threshold.
  // Parties below global threshold get automatically 0 seats.
  const seatsByDistrict = resultsByDistrict.map((r) => {
    const includedInDhondt = dhondt({
      ...r,
      results: r.results.filter(({ party }) =>
        aboveThreshold.some((p) => p.party === party)
      ),
    });
    const excludedFromDhondt = r.results.filter(
      ({ party }) => !aboveThreshold.some((p) => p.party === party)
    );
    return includedInDhondt.concat(
      excludedFromDhondt.map((r) => ({
        party: r.party,
        seats: 0,
      }))
    );
  });
  // Groups and accumulates seats per party.
  return seatsByDistrict.reduce((district, acc) => {
    district.forEach(({ party, seats }) => {
      const found = acc.find((p) => p.party === party);
      if (found) {
        found.seats += seats;
      } else {
        acc.push({ party, seats });
      }
    });
    return acc;
  }, []);
};
