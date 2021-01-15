import * as React from "react";
import { DhondtParliamentSeat } from "@ilemandatow/seats";
import { ParliamentChart, Toolbar, ToolbarItem } from "@ilemandatow/ui";
import { TOTAL_SEATS } from "../../constants";
import { PartyWithResult } from "../../data";

interface Props {
  parties: PartyWithResult[];
  seats: DhondtParliamentSeat[];
}

type ChartView = "parliament" | "halfPie" | "pie";

const PollChart: React.FC<Props> = ({ seats, parties }) => {
  const [view, setView] = React.useState<ChartView>("parliament");

  const handleViewChange = (view: ChartView) => () => {
    setView(view);
  };

  return (
    <div>
      <Toolbar>
        <ToolbarItem
          icon="cog"
          onClick={handleViewChange("parliament")}
          active={view === "parliament"}
        />
        <ToolbarItem
          icon="poll"
          onClick={handleViewChange("halfPie")}
          active={view === "halfPie"}
        />
        <ToolbarItem
          icon="chart-pie"
          onClick={handleViewChange("pie")}
          active={view === "pie"}
        />
      </Toolbar>
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
    </div>
  );
};

export default PollChart;
