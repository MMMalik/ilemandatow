import * as React from "react";
import clsx from "clsx";
import { useTheme } from "../theme";

export interface PaperProps {
  /**
   * Optional class name passed to root component.
   */
  className?: string;
}

const Paper: React.FC<PaperProps> = ({ children, className }) => {
  const { theme } = useTheme();
  const { textPrimary, bgPrimary } = theme;

  return (
    <div
      className={clsx(
        `br2 shadow-c-1 ${textPrimary} bg-${bgPrimary}`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Paper;
