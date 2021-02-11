import * as React from "react";
import ColorPicker from "../colorPicker";
import DismissablePopper from "../dismissablePopper";
import ColorPickerMenuBtn from "./ColorPickerMenuBtn";

export interface ColorPickerMenuProps {
  /**
   * Initial color.
   */
  color: string;
  /**
   * Change event callback.
   */
  onChange: (hex: string) => void;
}

const ColorPickerMenu: React.FC<ColorPickerMenuProps> = ({
  color,
  onChange,
}) => {
  return (
    <DismissablePopper
      keepOpen={true}
      ClickableComponent={({ onClick }) => (
        <ColorPickerMenuBtn onClick={onClick} color={color} />
      )}
    >
      <ColorPicker color={color} onChange={onChange} />
    </DismissablePopper>
  );
};

export default ColorPickerMenu;
