import * as React from "react";
import clsx from "clsx";
import Icon, { IconProp } from "../icon";
import { useTheme } from "../theme";

export interface MenuItemProps {
  /**
   * Callback fired upon clicking on item.
   */
  onClick?: (evt: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /**
   * Name of the icon.
   */
  icon?: IconProp;
  /**
   * Size of the icon.
   */
  iconSize?: "sm" | "1x";
  /**
   * Optional icon class name.
   */
  iconClassName?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  onClick,
  iconSize = "sm",
  iconClassName,
  icon,
}) => {
  const { theme } = useTheme();
  const { textMuted, textDivider } = theme;

  return (
    <li
      className={`pa2 pointer hover-bg-${textDivider} flex items-center`}
      onClick={onClick}
    >
      {icon && (
        <Icon
          icon={icon}
          className={clsx(iconClassName, `mr2 ${textMuted}`)}
          size={iconSize}
        />
      )}
      {children}
    </li>
  );
};

export default MenuItem;
