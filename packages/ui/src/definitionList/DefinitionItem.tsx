import * as React from "react";
import clsx from "clsx";
import { GridItem } from "../grid";
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
   * Sets title as bold.
   */
  boldTitle?: boolean;
}

const DefinitionItem: React.FC<DefinitionItemProps> = ({
  label,
  value,
  linkTo,
  linkExternal,
  className,
  boldTitle = true,
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
    <GridItem className={className ?? ""}>
      <div className={clsx("f6 mb2", boldTitle && "b")}>{label}</div>
      <div>{content}</div>
    </GridItem>
  );
};

export default DefinitionItem;
