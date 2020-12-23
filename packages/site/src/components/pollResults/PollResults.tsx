import * as React from "react";
import { dhondt } from "@ilemandatow/seats";
import { PollInfoFragment } from "../../types";
import { filterPollResults } from "../../data";
import { TOTAL_SEATS } from "../../constants";

interface Props {
  results: PollInfoFragment["results"];
}

const PollResults: React.FC<Props> = ({ results }) => {
  return (
    <div>
      {dhondt({
        results: filterPollResults(results).map((r) => {
          return {
            party: r?.party?.name ?? "",
            votes: r?.result ?? 0,
          };
        }),
        totalSeats: TOTAL_SEATS,
      }).map((r) => {
        return <div key={r.party}>{`${r.party}: ${r.seats}`}</div>;
      })}
    </div>
  );
};

export default PollResults;
