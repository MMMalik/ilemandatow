import * as React from "react";
import { dhondt } from "@ilemandatow/seats";
import { ParliamentChart } from "@ilemandatow/ui";
import { PollResultFragment } from "../../types";
import { TOTAL_SEATS } from "../../constants";

interface Props {
  results: PollResultFragment[];
}

const PollParliamentChart: React.FC<Props> = ({ results }) => {
  return (
    <ParliamentChart
      totalSeats={TOTAL_SEATS}
      parties={dhondt({
        results: results.map((r) => {
          return {
            party: r?.party?.id ?? "",
            votes: r?.result ?? 0,
          };
        }),
        totalSeats: TOTAL_SEATS,
      }).map(({ party: partyId, seats }) => {
        const party = results.find((r) => partyId === r.party?.id);
        const label = party?.party?.name ?? "";
        const fill = party?.party?.color ?? "";
        return {
          id: partyId,
          label,
          seats,
          fill,
        };
      })}
    />
  );
};

export default PollParliamentChart;
