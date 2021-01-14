import * as React from "react";
import clsx from "clsx";
import { useTheme } from "../theme";
import { useUIContext } from "../uiProvider";

export interface LinkProps {
  /**
   * Link destination.
   */
  to: string;
  /**
   * Use external link.
   */
  external?: boolean;
  /**
   * Optional root class name.
   */
  className?: string;
  /**
   * Display link as button.
   */
  btn?: boolean;
  /**
   * Link color variant.
   */
  primary?: boolean;
}

const Link: React.FC<LinkProps> = ({
  to,
  children,
  className,
  btn = false,
  external = false,
  primary = false,
}) => {
  const { theme } = useTheme();
  const { LinkInternalComponent } = useUIContext();
  const { primary: primaryColor, textPrimary, textOnPrimary } = theme;
  const cls = clsx(
    className,
    btn
      ? `br2 ph3 pv2 mh3 ${textOnPrimary} bg-${primaryColor}`
      : primary
      ? primaryColor
      : textPrimary,
    "link dim pointer"
  );

  if (external) {
    return (
      <a className={cls} href={to} rel="noopener" target="_blank">
        {children}
      </a>
    );
  }

  return (
    <LinkInternalComponent to={to} className={cls}>
      {children}
    </LinkInternalComponent>
  );
};

export default Link;
