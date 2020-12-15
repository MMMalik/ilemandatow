import * as React from "react";
import Link from "../link";

interface Props {
  to: string;
}

const TopbarButtonLink: React.FC<Props> = ({ children, to }) => {
  return (
    <Link to={to} className={`br2 ph3 pv2 mh3`} btn={true}>
      {children}
    </Link>
  );
};

export default TopbarButtonLink;
