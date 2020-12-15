import { graphql, useStaticQuery } from "gatsby";
import { AllPollsQueryQuery } from "@graphql/types";

export const useGetAllPolls = () => {
  const data = useStaticQuery<AllPollsQueryQuery>(graphql`
    query AllPollsQuery {
      allPollsJson {
        nodes {
          ...PollInfo
        }
      }
    }
  `);
  return data;
};
