import * as React from "react";
import { OnItemHover, useHover } from "../hover";
import { ParliamentGroupedParty } from "./types";
import Seat from "./Seat";
import { getHoverStyles } from "./styles";

interface Props {
  groupedParty: ParliamentGroupedParty;
  highlighted: boolean;
  offset: number;
  onItemHover: OnItemHover;
}

const Party: React.FC<Props> = ({
  groupedParty,
  highlighted,
  offset,
  onItemHover,
}) => {
  const {
    hovered,
    handleMouseLeave,
    handleMouseEnter,
    handleMouseOver,
  } = useHover({
    id: groupedParty.party.label,
    onItemHover,
  });

  const { party, seats } = groupedParty;

  return (
    <g
      style={getHoverStyles(highlighted || hovered)}
      onMouseOver={handleMouseOver}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {seats.map(({ x, y, r }, i) => {
        return (
          <Seat
            key={i}
            fill={party.fill}
            cx={x + offset}
            cy={y + offset}
            r={r}
          />
        );
      })}
    </g>
  );
};

export default Party;
