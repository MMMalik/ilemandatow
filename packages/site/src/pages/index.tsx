import * as React from "react";
import { graphql } from "gatsby";
import PollCards from "../components/pollsCards";
import { GetAllPollsQuery } from "../types";

export const query = graphql`
  query getAllPolls {
    allPollsJson {
      nodes {
        ...PollInfo
      }
    }
  }
`;

interface Props {
  data: GetAllPollsQuery;
}

const Index: React.FC<Props> = ({ data }) => {
  return <PollCards polls={data.allPollsJson.nodes} />;
};

export default Index;
