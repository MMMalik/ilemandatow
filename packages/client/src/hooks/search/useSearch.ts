import * as React from "react";
import { filterList } from "../../utils";
import { useSearchQuery } from "../queries";
import { getSearchPollsVariables } from "./getSearchPollsVariables";
import { SearchResults } from "./types";

export const useSearch = () => {
  const [results, setResults] = React.useState<SearchResults | undefined>();
  const { search } = useSearchQuery();

  const searchFn = React.useCallback(
    async (phrase?: string) => {
      if (!phrase) {
        return setResults({ polls: [] });
      }

      const [pollsData] = await Promise.all([
        search({
          variables: getSearchPollsVariables(phrase),
        }),
      ]);

      setResults({
        polls: filterList(pollsData.data?.allPolls),
      });
    },
    [search]
  );

  return {
    search: searchFn,
    results,
  };
};
