import { DataType } from "../../generated";
import { SortPollsBy } from "../../generated/operations";

export const getSearchPollsVariables = (
  phrase: string
): DataType.GetPollsQueryVariables => {
  return {
    sortBy: SortPollsBy.PublishedAtDesc,
    where: {
      OR: [
        {
          method: { name_contains_i: phrase },
        },
        {
          method: { fullName_contains_i: phrase },
        },
        {
          publishedBy_some: { name_contains_i: phrase },
        },
        {
          publishedBy_some: { abbr_contains_i: phrase },
        },
        {
          polledBy_some: { name_contains_i: phrase },
        },
        {
          polledBy_some: { abbr_contains_i: phrase },
        },
        {
          results_some: { party: { name_contains_i: phrase } },
        },
        {
          results_some: { party: { abbr_contains_i: phrase } },
        },
      ],
    },
  };
};
