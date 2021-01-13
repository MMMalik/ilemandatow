import * as React from "react";
import { HexColorPicker } from "react-colorful";

export interface Props {
  /**
   * Initial color.
   */
  color: string;
  /**
   * Change event callback.
   */
  onChange: (hex: string) => void;
}

const ColorPicker: React.FC<Props> = ({ color, onChange }) => {
  return <HexColorPicker className="cp-sm" color={color} onChange={onChange} />;
};

export default ColorPicker;
