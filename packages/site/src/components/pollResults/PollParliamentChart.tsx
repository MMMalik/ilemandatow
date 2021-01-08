import * as React from "react";
import { dhondt } from "@ilemandatow/seats";
import { ParliamentChart, useTheme } from "@ilemandatow/ui";
import { PollResultFragment } from "../../types";
import { TOTAL_SEATS } from "../../constants";
import { getPartyColor } from "../../data";

interface Props {
  results: PollResultFragment[];
}

const PollParliamentChart: React.FC<Props> = ({ results }) => {
  const theme = useTheme();

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
        const result = results.find((r) => partyId === r.party?.id);
        const party = result?.party ?? undefined;
        const label = party?.name ?? "";
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
