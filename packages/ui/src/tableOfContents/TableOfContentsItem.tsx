import * as React from "react";
import clsx from "clsx";
import Link from "../link";
import { useTheme } from "../theme";

interface TableOfContentsItemProps {
  /**
   * Link's url.
   */
  linkTo: string;
  /**
   * Indicates if item is active.
   */
  active?: boolean;
}

const TableOfContentsItem: React.FC<TableOfContentsItemProps> = ({
  children,
  linkTo,
  active,
}) => {
  const { theme } = useTheme();
  const { primary, textPrimary } = theme;

  return (
    <Link
      to={linkTo}
      className={clsx(
        `f6 mt2 db hover-${primary} pointer`,
        active ? primary : `${textPrimary} hover-${primary}`
      )}
    >
      {children}
    </Link>
  );
};

export default TableOfContentsItem;
