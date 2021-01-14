import * as React from "react";
import { useTheme } from "../theme";

export interface Props {
  /**
   * Component placed on the left side.
   */
  left: React.ReactNode;
  /**
   * Component placed in the center.
   */
  center: React.ReactNode;
  /**
   * Component placed on the right side.
   */
  right: React.ReactNode;
}

const Footer: React.FC<Props> = ({ left, center, right }) => {
  const { theme } = useTheme();
  const { textPrimary, bgPrimary } = theme;

  return (
    <div className={`${textPrimary} bg-${bgPrimary}`}>
      <div className="flex items-center justify-center">
        <div className="w-40 tr">{left}</div>
        <div className="w3 tc">{center}</div>
        <div className="w-40 tl">{right}</div>
      </div>
    </div>
  );
};

export default Footer;
