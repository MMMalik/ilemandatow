import * as React from "react";
import Icon, { IconProp } from "../icon";
import { useTheme } from "../theme";

export interface Props {
  /**
   * Callback fired upon clicking on item.
   */
  onClick: () => void;
  /**
   * Name of the icon.
   */
  icon: IconProp;
}

const MenuItem: React.FC<Props> = ({ children, onClick, icon }) => {
  const { theme } = useTheme();
  const { bgSecondary, textMuted } = theme;

  return (
    <li
      className={`pa2 hover-bg-${bgSecondary} flex items-center`}
      onClick={onClick}
    >
      <Icon icon={icon} className={`mr2 ${textMuted}`} size="sm" />
      {children}
    </li>
  );
};

export default MenuItem;
