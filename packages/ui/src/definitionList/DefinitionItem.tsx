import * as React from "react";
import clsx from "clsx";
import Icon from "../icon";
import Link from "../link";
import { useTheme } from "../theme";

export interface DefinitionItemProps {
  /**
   * Item label.
   */
  label: React.ReactNode;
  /**
   * Item value.
   */
  value: React.ReactNode;
  /**
   * Use to display value as link.
   */
  linkTo?: string;
  /**
   * Use external link.
   */
  linkExternal?: boolean;
  /**
   * Optional class name passed to root.
   */
  className?: string;
  /**
   * Disables margin on the root.
   */
  disableMargin?: boolean;
}

const DefinitionItem: React.FC<DefinitionItemProps> = ({
  label,
  value,
  linkTo,
  linkExternal,
  className,
  disableMargin,
}) => {
  const { theme } = useTheme();
  const { textMuted } = theme;

  const content = linkTo ? (
    <Link to={linkTo} external={linkExternal} className="flex align-center">
      <span>{value}</span>
      <Icon className={`ml1 ${textMuted}`} icon="external-link-alt" />
    </Link>
  ) : (
    value
  );

  return (
    <div className={clsx(!disableMargin && "mr5", className)}>
      <div className="f6 mb2 b">{label}</div>
      <div>{content}</div>
    </div>
  );
};

export default DefinitionItem;
