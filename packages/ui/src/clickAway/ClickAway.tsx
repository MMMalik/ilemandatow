import * as React from "react";

export interface ClickAwayProps {
  /**
   * Callback fired when click outside of child component was detected.
   */
  onOutsideClick: () => void;
}

const ClickAway: React.FC<ClickAwayProps> = ({ children, onOutsideClick }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const handleClick = React.useCallback(
    (evt: any) => {
      if (ref && ref.current && !ref.current.contains(evt.target)) {
        onOutsideClick();
      }
    },
    [onOutsideClick]
  );

  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return <div ref={ref}>{children}</div>;
};

export default ClickAway;
