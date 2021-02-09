import clsx from "clsx";
import * as React from "react";
import { usePopper } from "react-popper";
import { useTheme } from "../theme";
import { PopperPlacement } from "./types";

export interface PopperProps {
  /**
   * Reference element to which popper will be anchored.
   */
  refEl: HTMLElement | null;
  /**
   * Optional class name.
   */
  className?: string;
  /**
   * Popper placement.
   */
  placement?: PopperPlacement;
  /**
   * Callback fired upon clicking on root.
   */
  onClick?: () => void;
}

const Popper: React.FC<PopperProps> = ({
  children,
  className,
  placement,
  onClick,
  refEl,
}) => {
  const [
    popperElement,
    setPopperElement,
  ] = React.useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(refEl, popperElement, {
    placement,
  });
  const { theme } = useTheme();
  const { bgPrimary } = theme;

  return (
    <div
      ref={setPopperElement}
      onClick={onClick}
      className={clsx(
        !refEl && "dn",
        `shadow-c-1 br2 bg-${bgPrimary}`,
        className
      )}
      style={styles.popper}
      {...attributes.popper}
    >
      {children}
    </div>
  );
};

export default Popper;
