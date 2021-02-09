import * as React from "react";
import { SelectOption as SelectOptionType } from "./types";
import SelectLabel from "./SelectLabel";
import Menu, { MenuItem } from "../menu";
import { useTheme } from "../theme";

export interface SelectProps {
  /**
   * List of options.
   */
  options: SelectOptionType[];
  /**
   * Callback invoked upon selecting an item. Passes selected options.
   */
  onChange?: (selected: SelectOptionType | SelectOptionType[]) => void;
  /**
   * Callback invoked upon closing popup. Passes selected options. Use in conjunction with `multi`.
   */
  onClose?: (selected: SelectOptionType | SelectOptionType[]) => void;
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
  onChange,
  onClose,
  multi,
  placeholder,
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [touched, setTouched] = React.useState(false);
  const [menuWidth, setMenuWidth] = React.useState(0);
  const { theme } = useTheme();
  const { primary } = theme;
  const [selected, setSelected] = React.useState(
    options.filter((opt) => opt.preSelected)
  );

  const handleItemClick = (opt: SelectOptionType) => () => {
    if (multi) {
      setSelected((opts) => {
        const hasOpt = opts.some((o) => o.value === opt.value);
        if (hasOpt) {
          return opts.filter((o) => o.value !== opt.value);
        }
        return opts.concat(opt);
      });
    } else {
      setSelected([opt]);
    }
    setTouched(true);
  };

  const isSelected = (opt: SelectOptionType) => {
    return selected.some((o) => o.value === opt.value);
  };

  const handleClose = React.useCallback(() => {
    if (onClose) {
      if (multi) {
        onClose(selected);
      } else {
        /* eslint-disable-next-line */
        console.warn("Use `onClose` callback in conjunction with `multi` prop");
      }
    }
  }, [onClose, multi, selected]);

  React.useEffect(() => {
    if (onChange && touched) {
      onChange(selected);
    }
  }, [onChange, selected, touched]);

  React.useEffect(() => {
    if (ref && ref.current) {
      setMenuWidth(ref.current.offsetWidth);
    }
  }, [ref]);

  return (
    <Menu
      keepOpen={!!multi}
      style={{ width: menuWidth }}
      onClose={handleClose}
      MenuBtn={({ onClick, isOpen }) => {
        return (
          <SelectLabel
            ref={ref}
            menuOpen={isOpen}
            onClick={onClick}
            selected={selected}
            placeholder={placeholder}
          />
        );
      }}
    >
      {options.map((opt, i) => {
        const selected = isSelected(opt);
        return (
          <MenuItem
            key={`${opt.label}_${i}`}
            icon={
              multi
                ? selected
                  ? "check-square"
                  : ["far", "square"]
                : undefined
            }
            iconSize="1x"
            iconClassName={selected ? primary : undefined}
            onClick={handleItemClick(opt)}
          >
            {opt.label}
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default Select;
