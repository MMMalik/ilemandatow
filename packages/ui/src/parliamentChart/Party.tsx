import * as React from "react";
import { ParliamentGroupedParty } from "./types";
import Seat from "./Seat";

interface Props {
  groupedParty: ParliamentGroupedParty;
  offset: number;
}

const Party: React.FC<Props> = ({ groupedParty, offset }) => {
  const { party, seats } = groupedParty;

  return (
    <g>
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
