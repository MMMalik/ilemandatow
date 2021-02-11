import { DhondtGroupedQuotient, DhondtQuotient } from "./types";

/**
 * Groups quotients for each party and accumulates number of seats per party.
 *
 * @param quotients quotients to group
 */
export const groupQuotients = (
  quotients: DhondtQuotient[]
): DhondtGroupedQuotient => {
  return quotients.reduce((acc, { party }) => {
    return {
      ...acc,
      [party]: {
        seats: acc[party]?.seats ? acc[party].seats + 1 : 1,
      },
    };
  }, {} as DhondtGroupedQuotient);
};
