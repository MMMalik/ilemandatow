import * as React from "react";
import { Stats } from "@ilemandatow/ui";
import { PollInfoFragment } from "../../types";
import { filterPollResults, sortPollResults } from "../../data";

interface Props {
  results: PollInfoFragment["results"];
}

const PollCardStats: React.FC<Props> = ({ results }) => {
  return (
    <Stats
      stats={filterPollResults(results)
        .slice(0, 6)
        .sort(sortPollResults)
        .map(({ result, party }) => ({
          value: String(result ?? 0),
          label: party?.abbr ?? "",
        }))}
    />
  );
};

export default PollCardStats;
