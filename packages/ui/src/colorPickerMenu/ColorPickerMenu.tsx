import * as React from "react";
import ColorPicker from "../colorPicker";
import Icon from "../icon";
import DismissablePopper from "../dismissablePopper";

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

const ColorPickerMenu: React.FC<Props> = ({ color, onChange }) => {
  return (
    <DismissablePopper
      keepOpen={true}
      clickableComponent={(onClick) => (
        <Icon icon="circle" size="lg" onClick={onClick} style={{ color }} />
      )}
    >
      <ColorPicker color={color} onChange={onChange} />
    </DismissablePopper>
  );
};

export default ColorPickerMenu;
