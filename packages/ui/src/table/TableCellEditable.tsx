import * as React from "react";
import InputField, { InputFieldProps } from "../inputField";
import TableCell from "./TableCell";

export interface TableCellEditableProps
  extends Omit<InputFieldProps, "className"> {
  /**
   * Optional class name passed to underlying `InputField` component.
   */
  inputClassName?: string;
  /**
   * Makes input hidden.
   */
  hidden?: boolean;
}

const TableCellEditable: React.FC<TableCellEditableProps> = React.forwardRef<
  any,
  TableCellEditableProps
>(function TableCellEditable(
  { inputClassName, hidden, children, ...rest },
  ref
) {
  return (
    <TableCell>
      <InputField
        ref={ref}
        className={hidden ? "dn" : inputClassName}
        bare={true}
        {...rest}
      />
      {children}
    </TableCell>
  );
});

export default TableCellEditable;
