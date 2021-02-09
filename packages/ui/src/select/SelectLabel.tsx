import * as React from "react";
import Icon from "../icon";
import { SelectOption as SelectOptionType } from "./types";

export interface SelectLabelProps {
  /**
   * Selected option(s).
   */
  selected: SelectOptionType[];
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
>(function SelectLabel({ selected, placeholder, onClick, menuOpen }, ref) {
  return (
    <div
      ref={ref}
      onClick={onClick}
      className="w-100 ba b--black pointer pa2 br2"
    >
      <div className="w-100 flex justify-between">
        <div className="w-80 truncate">
          {selected.length > 0
            ? selected.map((s) => s.label).join(", ")
            : placeholder}
        </div>
        <Icon icon={menuOpen ? "angle-up" : "angle-down"} />
      </div>
    </div>
  );
});

export default SelectLabel;
