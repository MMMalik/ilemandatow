import * as React from "react";
import { ParliamentChartParty } from "./types";

interface Props {
  party: ParliamentChartParty;
  top: number;
  left: number;
}

const LegendTooltip: React.FC<Props> = ({ party, top, left }) => {
  return (
    <div
      className="fixed bl bw2 bg-white"
      style={{
        top,
        left,
        borderLeftColor: party.fill,
      }}
    >{`${party.label}: ${party.seats}`}</div>
  );
};

export default LegendTooltip;
