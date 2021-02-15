import * as React from "react";
import { filterList } from "../../utils";
import { useSearchQuery } from "../queries";
import { getSearchPollsVariables } from "./getSearchPollsVariables";
import { SearchConfig, SearchResults } from "./types";

const init = {
  phrase: undefined,
  polls: [],
  totalPolls: 0,
  noPolls: true,
  noSearch: true,
};

export const useSearch = () => {
  const [results, setResults] = React.useState<SearchResults>(init);
  const { search } = useSearchQuery();

  const searchFn = React.useCallback(
    async (phrase?: string, config?: SearchConfig) => {
      if (
        !phrase ||
        (phrase && config?.minLength && config.minLength > phrase.length)
      ) {
        return setResults(init);
      }

      const [pollsData] = await Promise.all([
        search({
          variables: getSearchPollsVariables(phrase, config),
        }),
      ]);

      const totalPolls = pollsData.data?._allPollsMeta?.count;

      setResults({
        phrase,
        polls: filterList(pollsData.data?.allPolls),
        totalPolls: totalPolls ?? 0,
        noSearch: false,
        noPolls: totalPolls === 0,
      });
    },
    [search]
  );

  return {
    search: searchFn,
    results,
  };
};
