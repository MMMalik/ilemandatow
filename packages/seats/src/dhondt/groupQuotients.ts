import { GroupedQuotient, Quotient } from "./types";

export const groupQuotients = (quotients: Quotient[]): GroupedQuotient => {
  return quotients.reduce((acc, { party }) => {
    return {
      ...acc,
      [party]: {
        seats: acc[party]?.seats ? acc[party].seats + 1 : 1,
      },
    };
  }, {} as GroupedQuotient);
};
