import * as React from "react";

const GridContainer: React.FC = ({ children }) => {
  return <div className="cf grid-fix2">{children}</div>;
};

export default GridContainer;
