import * as React from "react";
import clsx from "clsx";

export interface TableHeadCellProps {
  /**
   * Optional class name passed to root.
   */
  className?: string;
}

const TableHeadCell: React.FC<TableHeadCellProps> = ({
  children,
  className,
}) => {
  return <th className={clsx("fw6 tl pb3 pr3", className)}>{children}</th>;
};

export default TableHeadCell;
