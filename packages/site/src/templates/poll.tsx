import * as React from "react";
import { graphql } from "gatsby";
import { Paper } from "@ilemandatow/ui";
import { GetPollInfoQuery } from "../types";
import { filterPollResults } from "../data";
import PollParliamentChart from "../components/pollParliamentChart";

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
    <div>
      <div>Title</div>
      <div className="cf">
        <div className="fl w-third pv3">
          <Paper className="pa3">Table</Paper>
        </div>
        <div className="fl w-two-thirds pa3">
          <Paper className="pa3">
            <PollParliamentChart results={filterPollResults(results)} />
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Poll;
