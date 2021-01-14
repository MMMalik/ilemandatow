import * as React from "react";
import Link, { LinkProps } from "../link";

export type FooterLinkProps = Omit<LinkProps, "className">;

const FooterLink: React.FC<FooterLinkProps> = ({ children, ...rest }) => {
  return (
    <Link className="pa3 db" {...rest}>
      {children}
    </Link>
  );
};

export default FooterLink;
