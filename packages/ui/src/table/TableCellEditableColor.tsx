import * as React from "react";
import { ColorPickerMenu } from "..";
import TableCellEditable from "./TableCellEditable";

interface Props {
  /**
   * Field name.
   */
  name: string;
  /**
   * Field default value.
   */
  defaultValue?: string | number;
  /**
   * Color value.
   */
  color: string;
  /**
   * Callback fired on color change.
   */
  onChange: (hex: string) => void;
  /**
   * Form id.
   */
  form?: string;
  /**
   * Custom ref.
   */
  ref?: any;
}

const TableCellEditableColor: React.FC<Props> = React.forwardRef<any, Props>(
  ({ name, color, form, defaultValue, onChange }, ref) => {
    return (
      <TableCellEditable
        ref={ref}
        name={name}
        defaultValue={defaultValue}
        inputClassName="dn"
        form={form}
      >
        <ColorPickerMenu color={color} onChange={onChange} />
      </TableCellEditable>
    );
  }
);

export default TableCellEditableColor;
