import { useManualQuery } from "graphql-hooks";
import { getPolls } from "../gql/queries";
import { GetPollsQuery, GetPollsQueryVariables } from "../generated/operations";

export const useGetPolls = () => {
  const [fetchPolls] = useManualQuery<GetPollsQuery, GetPollsQueryVariables>(
    getPolls
  );

  return {
    fetchPolls,
  };
};
