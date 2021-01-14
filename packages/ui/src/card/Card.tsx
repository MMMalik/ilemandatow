import * as React from "react";
import Paper from "../paper";
import { useTheme } from "../theme";

export interface Props {
  /**
   * Card's title.
   */
  title: string;
  /**
   * Part of the title that is shown on the right side.
   */
  titleRightSide: string;
  /**
   * Card's footer.
   */
  footer: React.ReactNode;
}

const Card: React.FC<Props> = ({ title, titleRightSide, children, footer }) => {
  const { theme } = useTheme();
  const { bgPrimary, textMuted, textDisabled } = theme;

  return (
    <Paper className={`br2 bg-${bgPrimary} h5`}>
      <div className="h-20">
        <div className={`flex justify-between bb b--${textDisabled} pa3`}>
          <div className="b">{title}</div>
          <div className={`f6 ${textMuted}`}>{titleRightSide}</div>
        </div>
      </div>
      <div className="h-60 pa3 overflow-auto">{children}</div>
      <div className="h-20 pa3">{footer}</div>
    </Paper>
  );
};

export default Card;
