import { useManualQuery } from "graphql-hooks";
import { DataType } from "../../../generated";
import { searchQuery } from "../../../data";

export const useSearchQuery = () => {
  const [search] = useManualQuery<
    DataType.SearchQuery,
    DataType.SearchQueryVariables
  >(searchQuery);

  return {
    search,
  };
};
