import * as React from "react";

export interface Props {
  /**
   * Callback fired upon clicking on root component.
   */
  onClick?: () => void;
}

const TopbarAction: React.FC<Props> = ({ children, onClick }) => {
  return (
    <div className="pointer dim pa3 dib" onClick={onClick}>
      {children}
    </div>
  );
};

export default TopbarAction;
