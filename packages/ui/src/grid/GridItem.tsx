import * as React from "react";
import clsx from "clsx";

export interface GridItemProps {
  /**
   * Use to change grid item's width. Pair it with Tachyons `w-` classes.
   */
  className?: string;
}

const GridItem: React.FC<GridItemProps> = ({ children, className }) => {
  return <div className={clsx("fl pa2", className)}>{children}</div>;
};

export default GridItem;
