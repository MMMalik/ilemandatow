import * as React from "react";

const Grid: React.FC = ({ children }) => {
  return (
    <div className="flex flex-wrap items-stretch grid-fix2">{children}</div>
  );
};

export default Grid;
