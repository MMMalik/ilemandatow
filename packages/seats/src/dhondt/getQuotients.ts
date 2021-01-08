import { DhondtElection, DhondtQuotient } from "./types";

export const getQuotients = ({
  results,
  threshold,
  totalSeats,
}: DhondtElection): DhondtQuotient[] => {
  const totalVotes = results.reduce((acc, r) => acc + r.votes, 0);
  const filteredResults = results.filter((r) =>
    threshold ? r.votes / totalVotes > threshold / 100 : true
  );
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
