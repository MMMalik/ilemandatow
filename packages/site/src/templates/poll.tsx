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
  const poll = data.allPollsJson.nodes[0];
  const source = poll?.source;
  const polledBy = poll?.polledBy;
  const publishedBy = poll?.publishedBy;
  const publishedAt = poll?.publishedAt;
  const results = poll?.results;

  return (
    <>
      <PollResults
        results={results}
        source={source}
        polledBy={polledBy}
        publishedBy={publishedBy}
        publishedAt={publishedAt}
      />
    </>
  );
};

export default Poll;
