import * as React from "react";

const TableHeadCell: React.FC = ({ children }) => {
  return <th className="fw6 tl pb3 pr3">{children}</th>;
};

export default TableHeadCell;
