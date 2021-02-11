import * as React from "react";
import { isSelected } from "./isSelected";
import { SelectOption as SelectOptionType } from "./types";

interface SelectConfig {
  /**
   * List of options.
   */
  options: SelectOptionType[];
  /**
   * Callback invoked upon selecting an item. Passes selected options.
   */
  onChange?: (selected: SelectOptionType | SelectOptionType[]) => void;
  /**
   * Callback invoked upon closing popup. Passes selected options.
   */
  onClose?: (selected: SelectOptionType[]) => void;
  /**
   * Indicates if this is multi select.
   */
  multi?: boolean;
}

export const useSelect = ({
  options,
  multi,
  onChange,
  onClose,
}: SelectConfig) => {
  const [touched, setTouched] = React.useState(false);
  const [selected, setSelected] = React.useState(() =>
    options.filter((opt) => opt.preSelected)
  );

  const handleSelect = (opt: SelectOptionType) => {
    if (multi) {
      setSelected((opts) => {
        const hasOpt = isSelected(opt, opts);
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

  const deselect = (opt: SelectOptionType) => {
    setSelected((opts) => opts.filter((o) => o.value !== opt.value));
  };

  React.useEffect(() => {
    if (onChange && touched) {
      onChange(selected);
    }
  }, [onChange, selected, touched]);

  const handleClose = React.useCallback(() => {
    if (onClose) {
      onClose(selected);
    }
  }, [onClose, selected]);

  return { handleSelect, handleClose, deselect, selected };
};
