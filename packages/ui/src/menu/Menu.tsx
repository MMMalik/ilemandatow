import * as React from "react";
import DismissablePopper from "../dismissablePopper";
import { PopperPlacement } from "../popper";

export interface Props {
  /**
   * Component that toggles menu. It is passed to underlying `DismissablePopper` component. Provides `onClick` callback which must be passed down to clickable component.
   */
  menuBtn: (
    onClick: (evt: React.MouseEvent<HTMLElement, MouseEvent>) => void
  ) => React.ReactNode;
  /**
   * Popper placement position.
   */
  placement?: PopperPlacement;
}

const Menu: React.FC<Props> = ({ menuBtn, placement, children }) => {
  return (
    <DismissablePopper clickableComponent={menuBtn} placement={placement}>
      <ul className="list pl0 mv1">{children}</ul>
    </DismissablePopper>
  );
};

export default Menu;
