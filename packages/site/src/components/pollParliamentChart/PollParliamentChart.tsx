import * as React from "react";
import { DhondtParliamentSeat } from "@ilemandatow/seats";
import { ParliamentChart } from "@ilemandatow/ui";
import { TOTAL_SEATS } from "../../constants";
import { PartyWithResult } from "../../data";

interface Props {
  parties: PartyWithResult[];
  seats: DhondtParliamentSeat[];
}

const PollParliamentChart: React.FC<Props> = ({ seats, parties }) => {
  return (
    <ParliamentChart
      totalSeats={TOTAL_SEATS}
      parties={seats
        .filter(({ seats }) => seats > 0)
        .map(({ party: partyId, seats }) => {
          const result = parties.find((party) => party.id === partyId);
          const label = result?.name ?? "";
          const fill = result?.color ?? "";
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
