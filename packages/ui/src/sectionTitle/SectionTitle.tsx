import * as React from "react";
import { useTheme } from "../theme";

export interface SectionTitleProps {
  /**
   * Section title.
   */
  title: React.ReactNode;
  /**
   * Optional toolbar.
   */
  toolbar?: React.ReactNode;
  /**
   * Section subtitle.
   */
  subTitle?: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  toolbar,
  subTitle,
}) => {
  const { theme } = useTheme();
  const { textMuted } = theme;

  return (
    <div className="mb4">
      <div className="mb1 flex justify-between">
        <div className="f3">{title}</div>
        <div>{toolbar}</div>
      </div>
      {subTitle && <div className={`f5 ${textMuted}`}>{subTitle}</div>}
    </div>
  );
};

export default SectionTitle;
