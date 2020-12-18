import * as React from "react";
import { useTheme } from "../../../theme";

interface Props {
  title: string;
  titleRightSide: string;
  footer: React.ReactNode;
}

const Card: React.FC<Props> = ({ title, titleRightSide, children, footer }) => {
  const { theme } = useTheme();
  const { bgPrimary, textMuted, textDisabled } = theme;

  return (
    <article className={`br2 bg-${bgPrimary} h5`}>
      <div className="h-20">
        <div className={`flex justify-between bb b--${textDisabled} pa3`}>
          <div className="b">{title}</div>
          <div className={`f6 ${textMuted}`}>{titleRightSide}</div>
        </div>
      </div>
      <div className="h-60 pa3 overflow-auto">{children}</div>
      <div className="h-20 pa3">{footer}</div>
    </article>
  );
};

export default Card;
