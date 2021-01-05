import * as React from "react";
import { ParliamentChartParty } from "./types";
import Chart from "./Chart";
import Legend from "./Legend";

interface Props {
  parties: ParliamentChartParty[];
  totalSeats: number;
  innerR?: number;
}

const ParliamentChart: React.FC<Props> = ({
  totalSeats,
  parties,
  innerR = 50,
}) => {
  return (
    <div>
      <Chart parties={parties} totalSeats={totalSeats} innerR={innerR} />
      <Legend parties={parties} />
    </div>
  );
};

export default ParliamentChart;
