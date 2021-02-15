import { DataType } from "../../generated";
import { SortPollsBy } from "../../generated/operations";
import { SearchConfig } from "./types";

export const getSearchPollsVariables = (
  phrase: string,
  config?: SearchConfig
): DataType.GetPollsQueryVariables => {
  return {
    sortBy: SortPollsBy.PublishedAtDesc,
    first: config?.limit,
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
