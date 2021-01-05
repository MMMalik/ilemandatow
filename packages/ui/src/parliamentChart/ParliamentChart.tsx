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
  const [hoveredPartyId, setHoveredPartyId] = React.useState<
    string | undefined
  >(undefined);

  const handleItemHover = (id?: string) => {
    setHoveredPartyId(id);
  };

  return (
    <div>
      <Chart
        hoveredPartyId={hoveredPartyId}
        onItemHover={handleItemHover}
        parties={parties}
        totalSeats={totalSeats}
        innerR={innerR}
      />
      <Legend
        parties={parties}
        hoveredPartyId={hoveredPartyId}
        onItemHover={handleItemHover}
      />
    </div>
  );
};

export default ParliamentChart;
