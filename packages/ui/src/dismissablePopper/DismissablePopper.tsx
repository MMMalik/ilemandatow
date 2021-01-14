import * as React from "react";
import ClickAway from "../clickAway";
import Popper, { PopperPlacement } from "../popper";

export interface DismissablePopperProps {
  /**
   * Component that toggles popper. Provides `onClick` callback which must be passed down to clickable component.
   */
  clickableComponent: (
    onClick: (evt: React.MouseEvent<HTMLElement, MouseEvent>) => void
  ) => React.ReactNode;
  /**
   * Indicates if popper should remain open after clicking it.
   */
  keepOpen?: boolean;
  /**
   * Popper placement position.
   */
  placement?: PopperPlacement;
}

const DismissablePopper: React.FC<DismissablePopperProps> = ({
  children,
  clickableComponent,
  placement,
  keepOpen = false,
}) => {
  const [refEl, setRefEl] = React.useState<HTMLElement | null>(null);

  const handleClick = (evt: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = evt.currentTarget;
    setRefEl((refEl) => (refEl ? null : target));
  };

  const handlePopperClose = React.useCallback(() => {
    setRefEl(null);
  }, []);

  return (
    <ClickAway onOutsideClick={handlePopperClose}>
      {clickableComponent(handleClick)}
      <Popper
        placement={placement}
        onClick={keepOpen ? undefined : handlePopperClose}
        refEl={refEl}
      >
        {children}
      </Popper>
    </ClickAway>
  );
};

export default DismissablePopper;