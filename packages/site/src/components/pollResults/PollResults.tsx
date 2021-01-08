import * as React from "react";
import { PollInfoFragment } from "../../types";
import { filterPollResults } from "../../data";
import PollParliamentChart from "./PollParliamentChart";

interface Props {
  source: PollInfoFragment["source"];
  polledBy: PollInfoFragment["polledBy"];
  publishedAt: PollInfoFragment["publishedAt"];
  publishedBy: PollInfoFragment["publishedBy"];
  results: PollInfoFragment["results"];
}

const PollResults: React.FC<Props> = ({ results }) => {
  return (
    <div>
      <div>Title</div>
      <div className="mh7">
        <PollParliamentChart results={filterPollResults(results)} />
      </div>
    </div>
  );
};

export default PollResults;
