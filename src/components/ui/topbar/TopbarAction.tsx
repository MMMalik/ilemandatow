import * as React from "react";

interface Props {
  onClick: () => void;
}

const TopbarAction: React.FC<Props> = ({ children, onClick }) => {
  return (
    <div className="pointer ma3 dib" onClick={onClick}>
      {children}
    </div>
  );
};

export default TopbarAction;
