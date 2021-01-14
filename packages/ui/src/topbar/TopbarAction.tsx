import * as React from "react";

export interface TopbarActionProps {
  /**
   * Callback fired upon clicking on root component.
   */
  onClick?: () => void;
}

const TopbarAction: React.FC<TopbarActionProps> = ({ children, onClick }) => {
  return (
    <div className="pointer dim pa3 dib" onClick={onClick}>
      {children}
    </div>
  );
};

export default TopbarAction;
