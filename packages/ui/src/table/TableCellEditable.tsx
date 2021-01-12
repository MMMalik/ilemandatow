import * as React from "react";
import InputField, { InputType } from "../inputField";
import TableCell from "./TableCell";

interface Props {
  name: string;
  type?: InputType;
  value?: string | number;
  placeholder?: string;
  form?: string;
  ref?: any;
}

const TableCellEditable: React.FC<Props> = React.forwardRef<any, Props>(
  ({ name, type, value, placeholder, form }, ref) => {
    return (
      <TableCell>
        <InputField
          ref={ref}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          form={form}
          bare={true}
        />
      </TableCell>
    );
  }
);

export default TableCellEditable;
