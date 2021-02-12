import * as React from "react";
import Paper from "../paper";
import { useTheme } from "../theme";

export interface DataCardProps {
  /**
   * DataCard's title.
   */
  title: string;
  /**
   * DataCard's sub title.
   */
  subTitle?: string;
  /**
   * Part of the title that is shown on the right side.
   */
  titleRightSide: string;
  /**
   * DataCard's footer.
   */
  footer: React.ReactNode;
}

const DataCard: React.FC<DataCardProps> = ({
  title,
  subTitle,
  titleRightSide,
  children,
  footer,
}) => {
  const { theme } = useTheme();
  const { textMuted, textDivider } = theme;

  return (
    <Paper className="h5">
      <div className="h-20">
        <div className={`flex justify-between bb b--${textDivider} pa3`}>
          <div>
            <span className="b">{title}</span>
            {subTitle && (
              <span className={`ml1 ${textMuted}`}>{` / ${subTitle}`}</span>
            )}
          </div>
          <div className={`f6 ${textMuted}`}>{titleRightSide}</div>
        </div>
      </div>
      <div className="h-60 pa3 overflow-auto">{children}</div>
      <div className="h-20 pa3">{footer}</div>
    </Paper>
  );
};

export default DataCard;
