import * as React from "react";
import { DhondtParliamentSeat } from "@ilemandatow/seats";
import {
  ChartLegend,
  ChartLegendItem,
  Toolbar,
  ToolbarItem,
} from "@ilemandatow/ui";
import { sortByParliamentOrder, PartyWithResult } from "@ilemandatow/client";
import { parseParties } from "./parseParties";
import { ChartView } from "./types";
import Charts from "./Charts";

interface Props {
  parties: PartyWithResult[];
  seats: DhondtParliamentSeat[];
  totalSeats: number;
}

const PollChart: React.FC<Props> = ({ seats, parties, totalSeats }) => {
  const [view, setView] = React.useState<ChartView>("parliament");

  const handleViewChange = (view: ChartView) => () => {
    setView(view);
  };

  const parsedParties = sortByParliamentOrder(
    parseParties(parties, seats, totalSeats)
  );

  return (
    <div>
      <Toolbar>
        <ToolbarItem
          icon="user"
          onClick={handleViewChange("parliament")}
          active={view === "parliament"}
        />
        <ToolbarItem
          icon="chart-pie"
          onClick={handleViewChange("pie")}
          active={view === "pie"}
        />
        <ToolbarItem
          icon="poll"
          onClick={handleViewChange("bar")}
          active={view === "bar"}
        />
      </Toolbar>
      <Charts
        parsedParties={parsedParties}
        view={view}
        totalSeats={totalSeats}
      />
      <ChartLegend>
        {parsedParties.map(({ id, abbr, color }) => {
          return <ChartLegendItem key={id} label={abbr} fill={color} />;
        })}
      </ChartLegend>
    </div>
  );
};

export default PollChart;
