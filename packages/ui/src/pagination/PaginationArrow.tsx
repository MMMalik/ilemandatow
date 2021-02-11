import * as React from "react";
import { useTheme } from "../theme";
import Icon from "../icon";

export interface PaginationArrowProps {
  icon: "angle-right" | "angle-left";
  onClick: () => void;
}

const PaginationArrow: React.FC<PaginationArrowProps> = ({ icon, onClick }) => {
  const { theme } = useTheme();
  const { textMuted, bgPrimary } = theme;

  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-center br2 pa2 ma1 pointer ba b--transparent w2 h2 bg-${bgPrimary}`}
    >
      <Icon icon={icon} className={textMuted} />
    </div>
  );
};

export default PaginationArrow;
