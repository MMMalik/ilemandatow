import * as React from "react";
import { useTheme } from "../theme";

const TableCell: React.FC = ({ children }) => {
  const { theme } = useTheme();
  const { textDivider } = theme;
  return <td className={`pv3 pr3 bt b--${textDivider}`}>{children}</td>;
};

export default TableCell;
