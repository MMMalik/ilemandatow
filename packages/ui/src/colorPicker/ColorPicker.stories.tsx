import * as React from "react";
import ColorPickerCmp, { ColorPickerProps } from "./ColorPicker";

export const ColorPicker = (args: ColorPickerProps) => {
  return <ColorPickerCmp {...args} />;
};
