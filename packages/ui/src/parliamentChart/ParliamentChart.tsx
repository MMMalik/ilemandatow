import * as React from "react";
import { ChartValue } from "../chart";
import { getSeatsCoords } from "./getSeatsCoords";
import Party from "./Party";

export interface ParliamentChartProps {
  /**
   * List of party results and configs.
   */
  parties: ChartValue[];
  /**
   * Total number of seats in the parliament.
   */
  totalSeats: number;
  /**
   * Unitless value of inner radius.
   */
  innerR?: number;
}

const seatR = 5;
const seatD = 2 * seatR;

const ParliamentChart: React.FC<ParliamentChartProps> = ({
  totalSeats,
  parties,
  innerR = 75,
}) => {
  const { groupedParties, maxX } = getSeatsCoords({
    parties,
    totalSeats,
    opts: {
      innerR,
      seatR,
    },
  });

  const width = (maxX * 2 + seatD) * 1.025;

  return (
    <svg viewBox={`${-seatR} ${-seatR} ${width} ${width / 2}`} width="100%">
      {groupedParties.map((groupedParty) => {
        return (
          <Party
            key={groupedParty.party.id}
            groupedParty={groupedParty}
            offset={maxX}
          />
        );
      })}
    </svg>
  );
};

export default ParliamentChart;
