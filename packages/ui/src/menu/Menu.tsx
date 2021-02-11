import * as React from "react";
import clsx from "clsx";
import DismissablePopper, {
  DismissablePopperClickableComponent,
} from "../dismissablePopper";
import { PopperPlacement } from "../popper";

export interface MenuProps {
  /**
   * Component that toggles menu. It is passed to underlying `DismissablePopper` component.
   */
  MenuBtn: DismissablePopperClickableComponent;
  /**
   * Callback invoked upon closing menu.
   */
  onClose?: () => void;
  /**
   * Popper placement position.
   */
  placement?: PopperPlacement;
  /**
   * Indicates if popper should remain open after clicking it.
   */
  keepOpen?: boolean;
  /**
   * Optional list class name.
   */
  className?: string;
  /**
   * Optional list styles.
   */
  style?: React.CSSProperties;
}

const Menu: React.FC<MenuProps> = ({
  MenuBtn,
  placement,
  onClose,
  keepOpen,
  className,
  style,
  children,
}) => {
  return (
    <DismissablePopper
      keepOpen={keepOpen}
      onClose={onClose}
      ClickableComponent={MenuBtn}
      placement={placement}
    >
      <ul style={style} className={clsx("list pl0 mv2", className)}>
        {children}
      </ul>
    </DismissablePopper>
  );
};

export default Menu;
