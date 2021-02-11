import * as React from "react";
import SelectCmp, { SelectProps } from "./Select";
import { useSelect } from "./useSelect";

export const Select = (args: SelectProps) => {
  const options = args.options;
  const { selected, handleClose, handleSelect } = useSelect({
    options,
    multi: args.multi,
  });

  return (
    <div className="w5">
      <SelectCmp
        {...args}
        selected={selected}
        options={options}
        onClose={handleClose}
        onOptionClick={handleSelect}
      />
    </div>
  );
};
