import * as React from "react";
import { UseHoverOpts } from "./types";

export const useHover = ({ onItemHover, id }: UseHoverOpts) => {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    if (onItemHover) {
      onItemHover(id);
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (onItemHover) {
      onItemHover(undefined);
    }
  };

  const handleMouseOver = () => {
    if (!hovered) {
      setHovered(true);
      if (onItemHover) {
        onItemHover(id);
      }
    }
  };

  return { hovered, handleMouseEnter, handleMouseOver, handleMouseLeave };
};
