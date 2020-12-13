import * as React from "react";
import { Link } from "gatsby";
import { useTheme } from "@theme";

interface Props {
  to: string;
}

const TopbarButtonLink: React.FC<Props> = ({ children, to }) => {
  const { theme } = useTheme();
  const { primary } = theme;

  return (
    <Link
      to={to}
      className={`link dim br2 ph3 pv2 mh3 dib white bg-${primary}`}
    >
      {children}
    </Link>
  );
};

export default TopbarButtonLink;
