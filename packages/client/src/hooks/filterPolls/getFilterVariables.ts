import { DataType } from "../../generated";
import { FilterState } from "./useFilterReducer";

export const getWhereFilter = (
  state: FilterState
): DataType.PollWhereInput | undefined => {
  const result = Object.keys(state).reduce(
    (acc, key) => {
      switch (key) {
        case "publishers": {
          if (state[key].length > 0) {
            return {
              AND: acc.AND?.concat({
                OR: state[key].map((name) => ({
                  publishedBy_some: { name },
                })),
              }),
            };
          }
          return acc;
        }
        case "pollCompanies": {
          if (state[key].length > 0) {
            return {
              AND: acc.AND?.concat({
                OR: state[key].map((name) => ({
                  polledBy_some: { name },
                })),
              }),
            };
          }
          return acc;
        }
        default: {
          return acc;
        }
      }
    },
    { AND: [] } as DataType.PollWhereInput
  );
  return result.AND && result.AND.length > 0 ? result : undefined;
};

export const getFilterVariables = (
  state: FilterState
): DataType.GetPollsQueryVariables => {
  const { sortBy, page, pollsPerPage } = state;

  return {
    sortBy,
    skip: (page - 1) * pollsPerPage,
    first: pollsPerPage,
    where: getWhereFilter(state),
  };
};
