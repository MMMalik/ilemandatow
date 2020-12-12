import * as React from "react";
import { Link } from "gatsby";
import { useTheme } from "@theme";

interface Props {
  title: string;
  titleRightSide: string;
  linkTo: string;
  linkLabel: string;
}

const Card: React.FC<Props> = ({
  title,
  titleRightSide,
  children,
  linkTo,
  linkLabel,
}) => {
  const { theme } = useTheme();
  const { primary, bgSecondary, textMuted, textDisabled } = theme;

  return (
    <article className={`ba b--${textDisabled}`}>
      <div
        className={`flex justify-between items-end bb b--${textDisabled} pa3`}
      >
        <div className="b">{title}</div>
        <div className={`f6 ${textMuted}`}>{titleRightSide}</div>
      </div>
      <div className="pa3">{children}</div>
      <div className="pa3 tr">
        <Link to={linkTo} className={`link ${textMuted} ${primary}`}>
          {linkLabel}
        </Link>
      </div>
    </article>
  );
};

export default Card;
