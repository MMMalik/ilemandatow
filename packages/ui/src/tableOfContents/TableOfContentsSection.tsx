import * as React from "react";
import { useTheme } from "../theme";

interface TableOfContentsSectionProps {
  /**
   * Section's title.
   */
  title: string;
}

const TableOfContentsSection: React.FC<TableOfContentsSectionProps> = ({
  children,
  title,
}) => {
  const { theme } = useTheme();
  const { textMuted } = theme;

  return (
    <div className="mb3">
      <div className={`ttu f6 mb2 ${textMuted}`}>{title}</div>
      <div className="ml2">{children}</div>
    </div>
  );
};

export default TableOfContentsSection;
