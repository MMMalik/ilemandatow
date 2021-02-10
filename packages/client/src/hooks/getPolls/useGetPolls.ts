import { useManualQuery } from "graphql-hooks";
import { getPolls } from "../../data/queries";
import { DataType } from "../../generated";

export const useGetPolls = () => {
  const [fetchPolls] = useManualQuery<
    DataType.GetPollsQuery,
    DataType.GetPollsQueryVariables
  >(getPolls);

  return {
    fetchPolls,
  };
};
