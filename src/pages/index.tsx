import * as React from "react";
import { useGetAllPolls } from "@hooks";
import Page from "@components/layout/page";
import PollsToolbar from "@components/core/pollsToolbar";
import Polls, { PollsView } from "@components/core/polls";

const Index: React.FC = () => {
  const polls = useGetAllPolls();
  const [pollsView, setPollsView] = React.useState<PollsView>("grid");

  const handleGridViewClick = () => {
    setPollsView("grid");
  };

  const handleListViewClick = () => {
    setPollsView("list");
  };

  return (
    <Page>
      <PollsToolbar
        onGridViewClick={handleGridViewClick}
        onListViewClick={handleListViewClick}
      />
      <Polls pollsView={pollsView} polls={polls.allPollsJson.nodes} />
    </Page>
  );
};

export default Index;
