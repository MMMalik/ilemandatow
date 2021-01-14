import * as React from "react";
import { useTheme } from "../theme";

export interface SectionTitleProps {
  /**
   * Section title.
   */
  title: React.ReactNode;
  /**
   * Section subtitle.
   */
  subTitle?: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subTitle }) => {
  const { theme } = useTheme();
  const { textMuted } = theme;

  return (
    <div className="f3 mb4">
      <div className="mb1">{title}</div>
      {subTitle && <div className={`f5 ${textMuted}`}>{subTitle}</div>}
    </div>
  );
};

export default SectionTitle;
