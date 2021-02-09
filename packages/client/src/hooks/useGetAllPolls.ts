import { useManualQuery } from "graphql-hooks";
import { getAllPolls } from "../gql/queries";
import {
  GetAllPollsQuery,
  GetAllPollsQueryVariables,
} from "../generated/operations";

export const useGetAllPolls = () => {
  const [fetchPolls] = useManualQuery<
    GetAllPollsQuery,
    GetAllPollsQueryVariables
  >(getAllPolls);

  return {
    fetchPolls,
  };
};
