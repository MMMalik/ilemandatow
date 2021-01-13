import * as React from "react";
import ColorPickerMenuCmp, { Props } from "./ColorPickerMenu";

export const ColorPickerMenu = (args: Props) => {
  const [color, setColor] = React.useState(args.color);
  return <ColorPickerMenuCmp color={color} onChange={setColor} />;
};
