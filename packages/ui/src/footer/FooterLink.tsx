import * as React from "react";
import Link from "../link";

interface Props {
  to: string;
  external?: boolean;
}

const FooterLink: React.FC<Props> = ({ to, external, children }) => {
  return (
    <Link to={to} external={external} className="pa3 db">
      {children}
    </Link>
  );
};

export default FooterLink;
