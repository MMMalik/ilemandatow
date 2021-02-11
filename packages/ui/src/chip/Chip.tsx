import * as React from "react";
import { useTheme } from "../theme";
import Icon from "../icon";
import clsx from "clsx";

export interface ChipProps {
  /**
   * Chip's label.
   */
  label: string;
  /**
   * Value passed to remove callback.
   */
  value?: any;
  /**
   * Callback fired when `remove` icon is clicked.
   */
  onRemove?: (value: any) => void;
}

const Chip: React.FC<ChipProps> = ({ label, onRemove, value }) => {
  const { theme } = useTheme();
  const { bgTertiary, textOnBgTertiary } = theme;

  const handleRemove = () => {
    if (onRemove) {
      onRemove(value);
    }
  };

  return (
    <div
      className={`br4 ph2 pv1 ${textOnBgTertiary} bg-${bgTertiary} noselect`}
    >
      <span className={clsx(onRemove && "mr2")}>{label}</span>
      {onRemove && (
        <Icon
          icon="times"
          onClick={handleRemove}
          className={`pointer ${textOnBgTertiary}`}
          size="sm"
        />
      )}
    </div>
  );
};

export default Chip;
