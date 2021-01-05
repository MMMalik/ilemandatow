import * as React from "react";
import { ParliamentChartParty } from "./types";
import { getSeatsCoords } from "./getSeatsCoords";
import Party from "./Party";

interface Props {
  parties: ParliamentChartParty[];
  totalSeats: number;
  innerR?: number;
}

const Chart: React.FC<Props> = ({ parties, totalSeats, innerR }) => {
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

export default Chart;
