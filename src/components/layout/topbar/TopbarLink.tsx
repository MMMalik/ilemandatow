import * as React from "react";
import { Link } from "gatsby";
import { useTheme } from "@theme";

interface Props {
  to: string;
}

const TopbarLink: React.FC<Props> = ({ to, children }) => {
  const { theme } = useTheme();
  const { textPrimary } = theme;

  return (
    <Link to={to} className={`link dim f6 ma3 dib ${textPrimary}`}>
      {children}
    </Link>
  );
};

export default TopbarLink;
