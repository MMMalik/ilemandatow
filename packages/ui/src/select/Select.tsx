import * as React from "react";
import SelectLabel from "./SelectLabel";
import Menu, { MenuItem } from "../menu";
import { useTheme } from "../theme";
import { DismissablePopperClickableComponent } from "../dismissablePopper";
import { SelectOption as SelectOptionType } from "./types";
import { SelectContext } from "./context";
import { isSelected } from "./isSelected";

export interface SelectProps {
  /**
   * List of options.
   */
  options: SelectOptionType[];
  /**
   * Selected options. Use for `controlled` component only.
   */
  selected: SelectOptionType[];
  /**
   * Callback invoked upon clicking on an option.
   */
  onOptionClick?: (opt: SelectOptionType) => void;
  /**
   * Callback invoked upon closing popup.
   */
  onClose?: () => void;
  /**
   * Selection placeholder. Displayed when no items are selected.
   */
  placeholder?: string;
  /**
   * Indicates if this is multi select.
   */
  multi?: boolean;
}

const Select: React.FC<SelectProps> = ({
  options,
  selected,
  onOptionClick,
  onClose,
  multi,
  placeholder,
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [menuWidth, setMenuWidth] = React.useState(0);
  const { theme } = useTheme();
  const { primary } = theme;

  const handleOptionClick = (opt: SelectOptionType) => () => {
    if (onOptionClick) {
      onOptionClick(opt);
    }
  };

  React.useEffect(() => {
    if (ref?.current?.offsetWidth) {
      setMenuWidth(ref?.current?.offsetWidth);
    }
  }, [ref?.current?.offsetWidth]);

  const MenuBtn = React.useMemo(() => {
    const labelCmp: DismissablePopperClickableComponent = ({
      onClick,
      isOpen,
    }) => {
      return (
        <SelectLabel
          ref={ref}
          menuOpen={isOpen}
          onClick={onClick}
          placeholder={placeholder}
        />
      );
    };
    return labelCmp;
  }, [placeholder]);

  return (
    <SelectContext.Provider value={{ selected }}>
      <Menu
        keepOpen={!!multi}
        style={{ width: menuWidth }}
        className="max-h5 overflow-auto"
        onClose={onClose}
        MenuBtn={MenuBtn}
      >
        {options.map((opt, i) => {
          const isOptSelected = isSelected(opt, selected);
          return (
            <MenuItem
              key={`${opt.label}_${i}`}
              icon={
                multi
                  ? isOptSelected
                    ? "check-square"
                    : ["far", "square"]
                  : undefined
              }
              iconSize="1x"
              iconClassName={isOptSelected ? primary : undefined}
              onClick={handleOptionClick(opt)}
            >
              {opt.label}
            </MenuItem>
          );
        })}
      </Menu>
    </SelectContext.Provider>
  );
};

export default Select;
