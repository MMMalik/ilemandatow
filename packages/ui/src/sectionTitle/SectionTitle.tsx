import * as React from "react";
import { useTheme } from "../theme";

interface Props {
  title: React.ReactNode;
  subTitle?: React.ReactNode;
}

const SectionTitle: React.FC<Props> = ({ title, subTitle }) => {
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
