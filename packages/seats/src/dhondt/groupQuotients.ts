import { DhondtGroupedQuotient, DhondtQuotient } from "./types";

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
