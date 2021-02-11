import * as React from "react";
import { useTheme } from "../theme";
import Icon from "../icon";
import SelectLabelPlaceholder from "./SelectLabelPlaceholder";

export interface SelectLabelProps {
  /**
   * Selection placeholder. Displayed when no items are selected.
   */
  placeholder?: string;
  /**
   * Indicates if menu is open.
   */
  menuOpen?: boolean;
  /**
   * Callback invoked upon clicking on root element.
   */
  onClick?: (evt: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /**
   * Ref.
   */
  ref: any;
}

const SelectLabel: React.FC<SelectLabelProps> = React.forwardRef<
  HTMLDivElement,
  SelectLabelProps
>(function SelectLabel({ placeholder, onClick, menuOpen }, ref) {
  const { theme } = useTheme();
  const { textPrimary } = theme;

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`w-100 ba b--${textPrimary} pointer pa2 br2`}
    >
      <div className="w-100 flex justify-between">
        <SelectLabelPlaceholder placeholder={placeholder} />
        <Icon icon={menuOpen ? "angle-up" : "angle-down"} />
      </div>
    </div>
  );
});

export default SelectLabel;
