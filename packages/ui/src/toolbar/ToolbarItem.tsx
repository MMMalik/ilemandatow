import clsx from "clsx";
import * as React from "react";
import Icon, { IconProp } from "../icon";
import { useTheme } from "../theme";

export interface ToolbarItemProps {
  /**
   * Icon name.
   */
  icon: IconProp;
  /**
   * Callback fired upon clicking on the icon.
   */
  onClick: () => void;
  /**
   * Shows item as active.
   */
  active?: boolean;
}

const ToolbarItem: React.FC<ToolbarItemProps> = ({
  icon,
  onClick,
  active = false,
}) => {
  const { theme } = useTheme();
  const { textPrimary, textMuted } = theme;

  return (
    <div onClick={onClick} className={clsx("pointer", !active && "dim")}>
      <Icon
        className={clsx("mh2 pv1", active ? textPrimary : textMuted)}
        icon={icon}
        size="lg"
      />
    </div>
  );
};

export default ToolbarItem;
