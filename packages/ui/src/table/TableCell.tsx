import * as React from "react";
import clsx from "clsx";
import { useTheme } from "../theme";

export interface TableCellProps {
  /**
   * Optional class name passed to root.
   */
  className?: string;
}

const TableCell: React.FC<TableCellProps> = ({ children, className }) => {
  const { theme } = useTheme();
  const { textDivider } = theme;
  return (
    <td className={clsx(`pv3 pr3 bt b--${textDivider}`, className)}>
      {children}
    </td>
  );
};

export default TableCell;
