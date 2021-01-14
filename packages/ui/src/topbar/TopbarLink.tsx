import * as React from "react";
import clsx from "clsx";
import Link, { Props as LinkProps } from "../link";

export type Props = Omit<LinkProps, "className">;

const TopbarLink: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Link className={clsx(!rest.btn && "pa3 db")} {...rest}>
      {children}
    </Link>
  );
};

export default TopbarLink;
