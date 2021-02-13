import { useManualQuery } from "graphql-hooks";
import { getPollsQuery } from "../../../data";
import { DataType } from "../../../generated";

export const useGetPollsQuery = () => {
  const [fetchPolls] = useManualQuery<
    DataType.GetPollsQuery,
    DataType.GetPollsQueryVariables
  >(getPollsQuery);

  return {
    fetchPolls,
  };
};
