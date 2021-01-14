import * as React from "react";
import { ParliamentChartParty } from "./types";
import Chart from "./Chart";
import Legend from "./Legend";

export interface Props {
  /**
   * List of party results and configs.
   */
  parties: ParliamentChartParty[];
  /**
   * Total number of seats in the parliament.
   */
  totalSeats: number;
  /**
   * Unitless value of inner radius.
   */
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
