import * as React from "react";
import { ParliamentChart, PieChart } from "@ilemandatow/ui";
import { TOTAL_SEATS } from "../../constants";
import { ChartView, ParsedParties } from "./types";

interface Props {
  parsedParties: ParsedParties;
  view: ChartView;
}

const Charts: React.FC<Props> = ({ view, parsedParties }) => {
  return (
    <div className="pv3 pv4-l ph5-l">
      {view === "parliament" && (
        <ParliamentChart totalSeats={TOTAL_SEATS} parties={parsedParties} />
      )}
      {view === "pie" && (
        <PieChart
          pies={parsedParties.map(({ id, value, fill }) => {
            return {
              id,
              fill,
              value: (value * 100) / TOTAL_SEATS,
            };
          })}
          halfPie={true}
        />
      )}
    </div>
  );
};

export default Charts;
