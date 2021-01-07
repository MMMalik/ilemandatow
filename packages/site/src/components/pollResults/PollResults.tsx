import * as React from "react";
import { dhondt } from "@ilemandatow/seats";
import { ParliamentChart } from "@ilemandatow/ui";
import { PollInfoFragment } from "../../types";
import { filterPollResults } from "../../data";
import { TOTAL_SEATS } from "../../constants";

interface Props {
  results: PollInfoFragment["results"];
}

const PollResults: React.FC<Props> = ({ results }) => {
  const filteredResults = filterPollResults(results);
  return (
    <div>
      <div>Title</div>
      <div className="mh7">
        <ParliamentChart
          totalSeats={TOTAL_SEATS}
          parties={dhondt({
            results: filteredResults.map((r) => {
              return {
                party: r?.party?.id ?? "",
                votes: r?.result ?? 0,
              };
            }),
            totalSeats: TOTAL_SEATS,
          }).map(({ party: partyId, seats }) => {
            const party = filteredResults.find((r) => partyId === r.party?.id);
            return {
              id: partyId,
              label: party?.party?.name ?? "",
              seats,
              fill: "green",
            };
          })}
        />
      </div>
    </div>
  );
};

export default PollResults;
