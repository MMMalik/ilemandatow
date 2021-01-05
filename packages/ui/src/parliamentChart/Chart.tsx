import * as React from "react";
import { OnItemHover } from "../hover";
import { ParliamentChartParty } from "./types";
import { getSeatsCoords } from "./getSeatsCoords";
import Party from "./Party";
import LegendTooltip from "./LegendTooltip";

interface Props {
  parties: ParliamentChartParty[];
  totalSeats: number;
  innerR?: number;
  hoveredPartyId?: string;
  onItemHover: OnItemHover;
}

const Chart: React.FC<Props> = ({
  parties,
  totalSeats,
  innerR,
  hoveredPartyId,
  onItemHover,
}) => {
  const ref = React.useRef<SVGSVGElement>(null);
  const { groupedParties, maxX } = getSeatsCoords({
    parties,
    totalSeats,
    opts: {
      innerR,
    },
  });
  const vBoxMax = maxX * 2 * 1.2;
  const hoveredParty = parties.find((p) => p.label === hoveredPartyId);
  const hoveredPartyIndex = parties.findIndex(
    (p) => p.label === hoveredPartyId
  );
  let top = 0;
  let left = 0;

  if (ref && ref.current) {
    const els = ref.current.getElementsByTagName("g");
    const hoveredEl = els.item(hoveredPartyIndex);
    const bb = hoveredEl?.getBoundingClientRect();
    top = (bb?.top ?? 0) + (bb?.height ?? 0) / 2;
    left = (bb?.left ?? 0) + (bb?.width ?? 0) / 2;
  }

  return (
    <div>
      <svg ref={ref} viewBox={`0 0 ${vBoxMax} ${vBoxMax * 0.55}`} width="100%">
        {groupedParties.map((groupedParty) => {
          const label = groupedParty.party.label;
          return (
            <g key={label}>
              <Party
                highlighted={label === hoveredPartyId}
                onItemHover={onItemHover}
                groupedParty={groupedParty}
                offset={vBoxMax / 2}
              />
            </g>
          );
        })}
      </svg>
      {hoveredParty && (
        <LegendTooltip party={hoveredParty} top={top} left={left} />
      )}
    </div>
  );
};

export default Chart;
