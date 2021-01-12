import * as React from "react";
import clsx from "clsx";

interface Props {
  className?: string;
}

const Grid: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={clsx("flex flex-wrap items-stretch grid-fix2", className)}>
      {children}
    </div>
  );
};

export default Grid;
