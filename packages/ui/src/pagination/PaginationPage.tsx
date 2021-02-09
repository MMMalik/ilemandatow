import * as React from "react";
import clsx from "clsx";
import { useTheme } from "../theme";

export interface PaginationPageProps {
  /**
   * Page number.
   */
  page: number;
  /**
   * Sets page as active.
   */
  isActive: boolean;
  /**
   * Callback invoked upon clicking on the root element.
   */
  onClick?: () => void;
}

const PaginationPage: React.FC<PaginationPageProps> = ({
  page,
  isActive,
  onClick,
}) => {
  const { theme } = useTheme();
  const { primary, textMuted, bgPrimary } = theme;

  return (
    <div
      onClick={onClick}
      className={clsx(
        "flex items-center justify-center br2 pointer pa2 ma1 ba w2 h2",
        `bg-${bgPrimary}`,
        isActive ? `${primary} b--${primary}` : `${textMuted} b--transparent`
      )}
    >
      {page}
    </div>
  );
};

export default PaginationPage;
