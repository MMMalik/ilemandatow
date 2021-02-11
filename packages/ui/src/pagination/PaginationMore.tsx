import * as React from "react";
import { useTheme } from "../theme";

const PaginationMore: React.FC = () => {
  const { theme } = useTheme();
  const { textMuted, bgPrimary } = theme;

  return (
    <div
      className={`flex items-center justify-center br2 pa2 ma1 ba b--transparent w2 h2 ${textMuted} bg-${bgPrimary}`}
    >
      {"..."}
    </div>
  );
};

export default PaginationMore;
