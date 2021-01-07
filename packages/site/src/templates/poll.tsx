import * as React from "react";
import { graphql } from "gatsby";
import { GetPollInfoQuery } from "../types";
import PollResults from "../components/pollResults";

export const query = graphql`
  query getPollInfo($id: String!) {
    allPollsJson(filter: { id: { eq: $id } }) {
      nodes {
        ...PollInfo
      }
    }
  }
`;

interface Props {
  data: GetPollInfoQuery;
}

const Poll: React.FC<Props> = ({ data }) => {
  return (
    <>
      <PollResults results={data.allPollsJson.nodes[0]?.results} />
    </>
  );
};

export default Poll;
