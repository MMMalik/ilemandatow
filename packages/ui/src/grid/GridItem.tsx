import * as React from "react";
import clsx from "clsx";

export interface Props {
  /**
   * Use to change grid item's width. Use Tachyons class names. Default is `w-100`.
   */
  className?: string;
}

const GridItem: React.FC<Props> = ({ children, className = "w-100" }) => {
  return <div className={clsx("fl pa2", className)}>{children}</div>;
};

export default GridItem;
