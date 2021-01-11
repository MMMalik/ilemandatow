import * as React from "react";

const Table: React.FC = ({ children }) => {
  return (
    <table className="w-100" cellSpacing="0">
      {children}
    </table>
  );
};

export default Table;
