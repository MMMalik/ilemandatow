import { applyThreshold } from "../utils";
import { DhondtElection, DhondtQuotient } from "./types";

/**
 * Calculates quotients based on d'Hondt method.
 * Sorts quotients in descending order. Returns list of quotients with length equal to the total number seats.
 *
 * @param input calculation input
 */
export const getQuotients = ({
  results,
  threshold,
  totalSeats,
}: DhondtElection): DhondtQuotient[] => {
  const filteredResults = applyThreshold(results, threshold);
  return Array.from({ length: totalSeats })
    .map((_, i) => {
      const nextN = i + 1;
      return filteredResults.map(({ votes, party }) => {
        return {
          quotient: votes / nextN,
          party,
        };
      });
    })
    .reduce((acc, r) => acc.concat(r), [])
    .sort((r1, r2) => {
      const quotientA = r1.quotient;
      const quotientB = r2.quotient;
      return quotientB - quotientA;
    })
    .slice(0, totalSeats);
};
