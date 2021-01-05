import * as React from "react";
import { OnItemHover } from "../hover";
import LegendItem from "./LegendItem";
import { ParliamentChartParty } from "./types";

interface Props {
  parties: ParliamentChartParty[];
  hoveredPartyId?: string;
  onItemHover: OnItemHover;
}

const Legend: React.FC<Props> = ({ parties, hoveredPartyId, onItemHover }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {parties.map(({ label, fill }) => {
        return (
          <LegendItem
            key={label}
            id={label}
            label={label}
            backgroundColor={fill}
            highlighted={label === hoveredPartyId}
            onItemHover={onItemHover}
          />
        );
      })}
    </div>
  );
};

export default Legend;
