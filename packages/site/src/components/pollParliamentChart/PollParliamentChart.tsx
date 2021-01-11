import * as React from "react";
import { DhondtParliamentSeat } from "@ilemandatow/seats";
import { ParliamentChart, useTheme } from "@ilemandatow/ui";
import { TOTAL_SEATS } from "../../constants";
import { getPartyColor, getPartyFromResult } from "../../data";
import { PollResultFragment } from "../../types";

interface Props {
  results: PollResultFragment[];
  seats: DhondtParliamentSeat[];
}

const PollParliamentChart: React.FC<Props> = ({ seats, results }) => {
  const theme = useTheme();

  return (
    <ParliamentChart
      totalSeats={TOTAL_SEATS}
      parties={seats
        .filter(({ seats }) => seats > 0)
        .map(({ party: partyId, seats }) => {
          const result = getPartyFromResult(results, partyId);
          const party = result?.party ?? undefined;
          const label = party?.abbr ?? "";
          const fill = getPartyColor(theme.name, party);
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
