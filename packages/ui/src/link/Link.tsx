import * as React from "react";
import clsx from "clsx";
import { Link as GatsbyLink } from "gatsby";
import { useTheme } from "../theme";

interface Props {
  to: string;
  external?: boolean;
  className?: string;
  btn?: boolean;
  primary?: boolean;
}

const Link: React.FC<Props> = ({
  to,
  children,
  className,
  btn = false,
  external = false,
  primary = false,
}) => {
  const { theme } = useTheme();
  const { primary: primaryColor, textPrimary, textOnPrimary } = theme;
  const cls = clsx(
    className,
    btn
      ? `${textOnPrimary} bg-${primaryColor}`
      : primary
      ? primaryColor
      : textPrimary,
    "link dim"
  );

  if (external) {
    return (
      <a className={cls} href={to} rel="noopener" target="_blank">
        {children}
      </a>
    );
  }

  return (
    <GatsbyLink to={to} className={cls}>
      {children}
    </GatsbyLink>
  );
};

export default Link;
