import * as React from "react";
import clsx from "clsx";

interface Props {
  className?: string;
}

const GridItem: React.FC<Props> = ({ children, className = "w-100" }) => {
  return <div className={clsx("fl pa2", className)}>{children}</div>;
};

export default GridItem;
