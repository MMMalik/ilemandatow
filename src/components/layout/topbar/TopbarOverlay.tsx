import * as React from "react";
import { useTheme } from "@theme";
import TopbarIcon from "./TopbarIcon";

interface Props {
  open: boolean;
  toggleOpen: () => void;
}

const TopbarOverlay: React.FC<Props> = ({ open, toggleOpen, children }) => {
  const { theme } = useTheme();
  const { bgPrimary } = theme;

  if (!open) {
    return null;
  }

  return (
    <div
      className={`fixed z-max top-0 left-0 w-100 h-100 fade-in bg-${bgPrimary}`}
    >
      <div className="w-100 tr ph2">
        <TopbarIcon icon="times" onClick={toggleOpen} />
      </div>
      <div className="flex flex-column items-center">{children}</div>
    </div>
  );
};

export default TopbarOverlay;
