import * as React from "react";
import clsx from "clsx";
import Link, { LinkProps } from "../link";

export type TopbarLinkProps = Omit<LinkProps, "className">;

const TopbarLink: React.FC<TopbarLinkProps> = ({ children, ...rest }) => {
  return (
    <Link className={clsx(rest.btn ? "mh3" : "pa3 db")} {...rest}>
      {children}
    </Link>
  );
};

export default TopbarLink;
