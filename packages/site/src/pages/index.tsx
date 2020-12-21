import * as React from "react";
import { graphql } from "gatsby";
// import PollsToolbar from "../components/core/pollsToolbar";
import Polls, { PollsView } from "../components/polls";
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
  const [pollsView, setPollsView] = React.useState<PollsView>("grid");

  // const handleGridViewClick = () => {
  //   setPollsView("grid");
  // };

  // const handleListViewClick = () => {
  //   setPollsView("list");
  // };

  return <Polls pollsView={pollsView} polls={data.allPollsJson.nodes} />;
};

export default Index;
