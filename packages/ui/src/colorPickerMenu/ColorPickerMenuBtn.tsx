import * as React from "react";
import Icon from "../icon";
import { DismissablePopperOnClickCb } from "../dismissablePopper";

export interface ColorPickerMenuProps {
  /**
   * Initial color.
   */
  color: string;
  /**
   * Callback fired upon closing menu.
   */
  onClick?: DismissablePopperOnClickCb;
}

const ColorPickerMenuBtn: React.FC<ColorPickerMenuProps> = ({
  onClick,
  color,
}) => <Icon icon="circle" size="lg" onClick={onClick} style={{ color }} />;

export default ColorPickerMenuBtn;
