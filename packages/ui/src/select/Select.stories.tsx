import * as React from "react";
import SelectCmp, { SelectProps } from "./Select";

export const Select = (args: SelectProps) => {
  return (
    <div className="w5">
      <SelectCmp
        {...args}
        options={[
          { value: "test_0", label: "Test 0" },
          { value: "test_1", label: "Test 1" },
          { value: "test_2", label: "Test 2" },
          { value: "test_3", label: "Test 3" },
          { value: "test_4", label: "Test 4" },
          { value: "test_5", label: "Test 5" },
          { value: "test_6", label: "Test 6" },
        ]}
      />
    </div>
  );
};
