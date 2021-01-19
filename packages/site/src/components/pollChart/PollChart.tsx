import * as React from "react";
import { DhondtParliamentSeat } from "@ilemandatow/seats";
import {
  ChartLegend,
  ChartLegendItem,
  ParliamentChart,
  PieChart,
  Toolbar,
  ToolbarItem,
} from "@ilemandatow/ui";
import { PartyWithResult } from "../../data";
import { TOTAL_SEATS } from "../../constants";
import { getParties } from "./getParties";

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

  const parsedParties = getParties(parties, seats);

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
      {view === "parliament" && (
        <ParliamentChart totalSeats={TOTAL_SEATS} parties={parsedParties} />
      )}
      {view === "pie" && (
        <div className="pa4">
          <PieChart
            pies={parsedParties.map(({ id, seats, fill }) => {
              return {
                id,
                fill,
                value: (seats * 100) / TOTAL_SEATS,
              };
            })}
            halfPie={true}
          />
        </div>
      )}
      <ChartLegend>
        {parsedParties.map(({ id, abbr, fill }) => {
          return <ChartLegendItem key={id} label={abbr} fill={fill} />;
        })}
      </ChartLegend>
    </div>
  );
};

export default PollChart;
