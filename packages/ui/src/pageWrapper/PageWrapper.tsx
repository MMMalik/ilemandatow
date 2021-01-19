import * as React from "react";
import { useTheme } from "../theme";

export interface PageWrapperProps {
  /**
   * Topbar component.
   */
  topbar: React.ReactNode;
  /**
   * Footer component.
   */
  footer: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  topbar,
  footer,
  children,
}) => {
  const { theme } = useTheme();
  const { textPrimary, bgSecondary } = theme;

  return (
    <div className={`${textPrimary} bg-${bgSecondary}`}>
      <div className="flex flex-column min-vh-100">
        <div className="flex-grow-0">{topbar}</div>
        <div className="flex-grow-1">
          <div className="pa3 pv4 pa4-m pa5-l">{children}</div>
        </div>
        <div className="flex-grow-0">{footer}</div>
      </div>
    </div>
  );
};

export default PageWrapper;
