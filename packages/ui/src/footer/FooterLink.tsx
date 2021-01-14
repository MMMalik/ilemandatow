import * as React from "react";
import Link, { Props as LinkProps } from "../link";

export type Props = Omit<LinkProps, "className">;

const FooterLink: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Link className="pa3 db" {...rest}>
      {children}
    </Link>
  );
};

export default FooterLink;
