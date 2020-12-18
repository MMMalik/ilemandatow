import * as React from "react";
import { PollInfoFragment } from "../../../types";
import { filterList, sortDataResults } from "../../../data";
import { UNDECIDED_PARTY_ID } from "../../../constants";
import Stats from "../../ui/stats";

interface Props {
  results: PollInfoFragment["results"];
}

const PollCardStats: React.FC<Props> = ({ results }) => {
  return (
    <Stats
      stats={filterList(results)
        .filter(({ party }) => party?.id !== UNDECIDED_PARTY_ID)
        .slice(0, 6)
        .sort(sortDataResults)
        .map(({ result, party }) => ({
          value: String(result ?? 0),
          label: party?.abbr ?? "",
        }))}
    />
  );
};

export default PollCardStats;
