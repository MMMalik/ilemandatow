import * as React from "react";
import { BarChart, ParliamentChart, PieChart } from "@ilemandatow/ui";
import { TOTAL_SEATS } from "../../constants";
import { ChartView, ParsedParties } from "./types";

interface Props {
  parsedParties: ParsedParties;
  view: ChartView;
}

const Charts: React.FC<Props> = ({ view, parsedParties }) => {
  const partiesWithPerc = parsedParties.map(({ id, value, fill }) => {
    return {
      id,
      fill,
      value: (value * 100) / TOTAL_SEATS,
    };
  });
  const sortedPartiesWithPerc = partiesWithPerc.sort(
    (v1, v2) => v2.value - v1.value
  );

  return (
    <div className="pv3 pv4-l ph5-l">
      {view === "parliament" && (
        <ParliamentChart totalSeats={TOTAL_SEATS} parties={parsedParties} />
      )}
      {view === "pie" && <PieChart pies={partiesWithPerc} halfPie={true} />}
      {view === "bar" && <BarChart bars={sortedPartiesWithPerc} />}
    </div>
  );
};

export default Charts;
