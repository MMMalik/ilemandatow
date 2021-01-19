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
}

const PollChart: React.FC<Props> = ({ seats, parties }) => {
  const [view, setView] = React.useState<ChartView>("parliament");

  const handleViewChange = (view: ChartView) => () => {
    setView(view);
  };

  const parsedParties = parseParties(parties, seats);

  return (
    <div>
      <Toolbar>
        <ToolbarItem
          icon="user"
          onClick={handleViewChange("parliament")}
          active={view === "parliament"}
        />
        {/* <ToolbarItem
          icon="poll"
          onClick={handleViewChange("halfPie")}
          active={view === "halfPie"}
        /> */}
        <ToolbarItem
          icon="chart-pie"
          onClick={handleViewChange("pie")}
          active={view === "pie"}
        />
      </Toolbar>
      <Charts parsedParties={parsedParties} view={view} />
      <ChartLegend>
        {parsedParties.map(({ id, abbr, fill }) => {
          return <ChartLegendItem key={id} label={abbr} fill={fill} />;
        })}
      </ChartLegend>
    </div>
  );
};

export default PollChart;
