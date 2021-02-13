import * as React from "react";
import { useTheme } from "../theme";
import Button from "../button";
import Divider from "../divider";
import Icon from "../icon";

export interface DialogProps {
  /**
   * Dialog's title.
   */
  title: React.ReactNode;
  /**
   * Handles dialog close.
   */
  onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ title, onClose, children }) => {
  const { theme } = useTheme();
  const { bgPrimary, textMuted } = theme;

  React.useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className={"fixed top-0 left-0 w-100 h-100 z-max bg-black-50"}>
      <div className="flex items-center justify-center h-100">
        <div className="absolute w-100 h-100 z-0" onClick={onClose} />
        <div
          className={`relative z-1 br2-l bg-${bgPrimary} w-100 h-100 w-75-l h-75-l`}
        >
          <div className="pa4 h-100 flex flex-column">
            <div className="flex-grow-0 mb3">
              <div className="flex items-center justify-between">
                <div>{title}</div>
                <Icon
                  icon="times"
                  className={`pointer ${textMuted}`}
                  onClick={onClose}
                />
              </div>
            </div>
            <Divider disableSpacing={true} />
            <div className="flex-grow-1 overflow-auto">{children}</div>
            <Divider disableSpacing={true} />
            <div className="flex-grow-0 mt3">
              <div className="flex justify-end">
                <Button onClick={onClose}>{"OK"}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
