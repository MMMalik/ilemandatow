import * as React from "react";
import { BarChart, ParliamentChart, PieChart } from "@ilemandatow/ui";
import { TOTAL_SEATS } from "../../constants";
import { ChartView, ParsedParties } from "./types";

interface Props {
  parsedParties: ParsedParties;
  view: ChartView;
}

const Charts: React.FC<Props> = ({ view, parsedParties }) => {
  const partiesWithPerc = parsedParties.map(({ id, value, fill, order }) => {
    return {
      id,
      fill,
      value: (value * 100) / TOTAL_SEATS,
      order,
    };
  });

  return (
    <div className="pv3 pv4-l ph5-l">
      {view === "parliament" && (
        <ParliamentChart
          totalSeats={TOTAL_SEATS}
          parties={[...parsedParties].sort((p1, p2) => p1.order - p2.order)}
        />
      )}
      {view === "pie" && (
        <PieChart
          pies={[...partiesWithPerc].sort((p1, p2) => p1.order - p2.order)}
          halfPie={true}
        />
      )}
      {view === "bar" && (
        <BarChart
          bars={[...partiesWithPerc].sort((p1, p2) => p2.value - p1.value)}
        />
      )}
    </div>
  );
};

export default Charts;
