import * as React from "react";
import Link from "../link";

interface Props {
  to: string;
}

const TopbarLink: React.FC<Props> = ({ to, children }) => {
  return (
    <Link to={to} className="pa3">
      {children}
    </Link>
  );
};

export default TopbarLink;
