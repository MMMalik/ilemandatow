import * as React from "react";
import DismissablePopper from "../dismissablePopper";
import { PopperPlacement } from "../popper";

export interface Props {
  /**
   * Component that toggles menu popper.
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
      <ul className="list pl0 mv1 pointer">{children}</ul>
    </DismissablePopper>
  );
};

export default Menu;
