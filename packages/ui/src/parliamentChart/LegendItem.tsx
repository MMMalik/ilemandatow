import * as React from "react";
import { OnItemHover, useHover } from "../hover";
import { getHoverStyles } from "./styles";

interface Props {
  id: string;
  label: string;
  highlighted: boolean;
  backgroundColor: string;
  onItemHover: OnItemHover;
}

const LegendItem: React.FC<Props> = ({
  id,
  label,
  onItemHover,
  backgroundColor,
  highlighted,
}) => {
  const { hovered, handleMouseLeave, handleMouseEnter } = useHover({
    id,
    onItemHover,
  });

  return (
    <div
      key={label}
      className="flex items-center ma2"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div
        className="ma1 br1"
        style={{
          height: "10px",
          width: "10px",
          backgroundColor,
          ...getHoverStyles(highlighted || hovered),
        }}
      />
      <div>{label}</div>
    </div>
  );
};

export default LegendItem;
