import * as React from "react";
import DividerCmp, { DividerProps } from "./Divider";

export const Divider = (args: DividerProps) => {
  return (
    <div className="w5">
      <DividerCmp {...args} />
    </div>
  );
};
