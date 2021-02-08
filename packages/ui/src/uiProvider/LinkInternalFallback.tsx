import * as React from "react";

export interface LinkInternalFallbackProps {
  /**
   * Link destination.
   */
  to: string;
  /**
   * Root class name.
   */
  className?: string;
}

const LinkInternalFallback: React.FC<LinkInternalFallbackProps> = ({
  children,
  to,
  className,
}) => {
  React.useEffect(() => {
    /* eslint-disable-next-line */
    console.warn(
      "Please provide component for internal navigation. Fallback is used."
    );
  }, []);

  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
};

export default LinkInternalFallback;
