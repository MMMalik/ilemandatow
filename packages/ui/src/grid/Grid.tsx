import * as React from "react";
import clsx from "clsx";

export interface GridProps {
  /**
   * Optional class name passed to the root component.
   */
  className?: string;
}

const Grid: React.FC<GridProps> = ({ children, className }) => {
  return (
    <div className={clsx("flex flex-wrap items-stretch grid-fix", className)}>
      {children}
    </div>
  );
};

export default Grid;
