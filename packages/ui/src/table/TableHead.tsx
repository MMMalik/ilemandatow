import * as React from "react";
import TableRow from "./TableRow";

const TableHead: React.FC = ({ children }) => {
  return (
    <thead>
      <TableRow>{children}</TableRow>
    </thead>
  );
};

export default TableHead;
