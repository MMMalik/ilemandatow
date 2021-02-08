import * as React from "react";
import { DhondtParliamentSeat } from "@ilemandatow/seats";
import {
  ChartLegend,
  ChartLegendItem,
  Toolbar,
  ToolbarItem,
} from "@ilemandatow/ui";
import { PartyWithResult } from "../../data";
import { parseParties } from "./parseParties";
import { ChartView } from "./types";
import Charts from "./Charts";

interface Props {
  parties: PartyWithResult[];
  seats: DhondtParliamentSeat[];
  totalSeats: number;
}

const PollChart: React.FC<Props> = ({ seats, parties, totalSeats }) => {
  const [view, setView] = React.useState<ChartView>("pie");

  const handleViewChange = (view: ChartView) => () => {
    setView(view);
  };

  const parsedParties = parseParties(parties, seats);

  return (
    <div>
      <Toolbar>
        <ToolbarItem
          icon="chart-pie"
          onClick={handleViewChange("pie")}
          active={view === "pie"}
        />
        <ToolbarItem
          icon="user"
          onClick={handleViewChange("parliament")}
          active={view === "parliament"}
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
        {parsedParties.map(({ id, abbr, fill }) => {
          return <ChartLegendItem key={id} label={abbr} fill={fill} />;
        })}
      </ChartLegend>
    </div>
  );
};

export default PollChart;
