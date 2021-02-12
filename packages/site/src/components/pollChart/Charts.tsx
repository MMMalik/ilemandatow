import * as React from "react";
import { BarChart, ParliamentChart, PieChart } from "@ilemandatow/ui";
import { ChartView, ParsedParties } from "./types";

interface Props {
  parsedParties: ParsedParties;
  view: ChartView;
  totalSeats: number;
}

const Charts: React.FC<Props> = ({ view, parsedParties, totalSeats }) => {
  const parsedWithSeats = parsedParties.map(({ seats, name, color, id }) => ({
    id,
    value: seats,
    label: name,
    fill: color,
  }));

  const parsedWithPerc = parsedParties.map(
    ({ seatsPerc, name, color, id }) => ({
      id,
      value: seatsPerc ?? 0,
      label: name,
      fill: color,
    })
  );

  return (
    <div className="pv3 pv4-l ph5-l">
      {view === "parliament" && (
        <ParliamentChart totalSeats={totalSeats} parties={parsedWithSeats} />
      )}
      {view === "pie" && <PieChart pies={parsedWithPerc} halfPie={true} />}
      {view === "bar" && (
        <BarChart
          bars={[...parsedWithPerc].sort((p1, p2) => p2.value - p1.value)}
        />
      )}
    </div>
  );
};

export default Charts;
