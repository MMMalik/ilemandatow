import * as React from "react";
import { ChartParty } from "../chart";
import { getSeatsCoords } from "./getSeatsCoords";
import Party from "./Party";

export interface ParliamentChartProps {
  /**
   * List of party results and configs.
   */
  parties: ChartParty[];
  /**
   * Total number of seats in the parliament.
   */
  totalSeats: number;
  /**
   * Unitless value of inner radius.
   */
  innerR?: number;
}

const ParliamentChart: React.FC<ParliamentChartProps> = ({
  totalSeats,
  parties,
  innerR = 100,
}) => {
  const { groupedParties, maxX } = getSeatsCoords({
    parties,
    totalSeats,
    opts: {
      innerR,
    },
  });
  const vBoxMax = maxX * 2 * 1.2;

  return (
    <svg viewBox={`0 0 ${vBoxMax} ${vBoxMax * 0.55}`} width="100%">
      {groupedParties.map((groupedParty) => {
        return (
          <Party
            key={groupedParty.party.id}
            groupedParty={groupedParty}
            offset={vBoxMax / 2}
          />
        );
      })}
    </svg>
  );
};

export default ParliamentChart;
