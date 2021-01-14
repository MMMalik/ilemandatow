import * as React from "react";

export interface Props {
  to: string;
  className?: string;
}

const LinkInternalFallback: React.FC<Props> = ({ children, to, className }) => {
  React.useEffect(() => {
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
