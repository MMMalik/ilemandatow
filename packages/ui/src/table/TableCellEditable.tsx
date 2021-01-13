import * as React from "react";
import InputField, { InputType } from "../inputField";
import TableCell from "./TableCell";

interface Props {
  /**
   * Field name.
   */
  name: string;
  /**
   * Input type.
   */
  type?: InputType;
  /**
   * Input placeholder.
   */
  placeholder?: string;
  /**
   * Form id.
   */
  form?: string;
  /**
   * Field default value.
   */
  defaultValue?: string | number;
  /**
   * Optional class name passed to input.
   */
  inputClassName?: string;
  /**
   * Custom ref.
   */
  ref?: any;
}

const TableCellEditable: React.FC<Props> = React.forwardRef<any, Props>(
  (
    { name, type, placeholder, form, inputClassName, defaultValue, children },
    ref
  ) => {
    return (
      <TableCell>
        <InputField
          ref={ref}
          className={inputClassName}
          name={name}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          form={form}
          bare={true}
        />
        {children}
      </TableCell>
    );
  }
);

export default TableCellEditable;
