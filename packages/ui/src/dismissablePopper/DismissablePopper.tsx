import * as React from "react";
import ClickAway from "../clickAway";
import Popper, { PopperPlacement } from "../popper";
import { DismissablePopperClickableComponent } from "./types";

export interface DismissablePopperProps {
  /**
   * Component that toggles popper.
   */
  ClickableComponent: DismissablePopperClickableComponent;
  /**
   * Callback fired upon closing the popper.
   */
  onClose?: () => void;
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
  ClickableComponent,
  placement,
  onClose,
  keepOpen = false,
}) => {
  const [touched, setTouched] = React.useState(false);
  const [refEl, setRefEl] = React.useState<HTMLElement | null>(null);

  const handleClick = (evt: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = evt.currentTarget;
    setRefEl((refEl) => (refEl ? null : target));
    setTouched(true);
  };

  const handleOutsideClick = React.useCallback(() => {
    setRefEl(null);
  }, []);

  const handlePopperClick = React.useCallback(() => {
    if (!keepOpen) {
      setRefEl(null);
    }
  }, [keepOpen]);

  React.useEffect(() => {
    if (onClose && touched && !refEl) {
      onClose();
    }
  }, [onClose, touched, refEl]);

  return (
    <ClickAway onOutsideClick={handleOutsideClick}>
      <ClickableComponent onClick={handleClick} isOpen={!!refEl} />
      <Popper placement={placement} onClick={handlePopperClick} refEl={refEl}>
        {children}
      </Popper>
    </ClickAway>
  );
};

export default DismissablePopper;
