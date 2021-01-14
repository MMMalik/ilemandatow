import * as React from "react";
import InputField, { Props as InputProps } from "../inputField";
import TableCell from "./TableCell";

export interface Props extends Omit<InputProps, "className"> {
  /**
   * Optional class name passed to underlying `InputField` component.
   */
  inputClassName?: string;
  /**
   * Makes input hidden.
   */
  hidden?: boolean;
}

const TableCellEditable: React.FC<Props> = React.forwardRef<any, Props>(
  ({ inputClassName, hidden, children, ...rest }, ref) => {
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
  }
);

export default TableCellEditable;
