import * as React from "react";
import Popper from "../popper";
import { useTheme } from "../theme";

export interface Props {
  /**
   * Displayed message.
   */
  title: string;
}

const Tooltip: React.FC<Props> = ({ children, title }) => {
  const [refEl, setRefEl] = React.useState<HTMLDivElement | null>(null);
  const { theme } = useTheme();
  const { textMuted } = theme;

  return (
    <>
      <div className="tooltip dib" ref={setRefEl}>
        {children}
      </div>
      <Popper refEl={refEl} className={`f6 tooltiptext pa1 ${textMuted}`}>
        {title}
      </Popper>
    </>
  );
};

export default Tooltip;
