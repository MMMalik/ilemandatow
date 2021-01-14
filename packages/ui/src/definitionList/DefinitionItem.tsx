import * as React from "react";
import Icon from "../icon";
import Link from "../link";
import { useTheme } from "../theme";

export interface Props {
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
}

const DefinitionItem: React.FC<Props> = ({
  label,
  value,
  linkTo,
  linkExternal,
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
    <div className="mr5">
      <div className="f6 mb2 b">{label}</div>
      <div>{content}</div>
    </div>
  );
};

export default DefinitionItem;
