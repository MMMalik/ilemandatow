import * as React from "react";
import Icon, { IconProp } from "../icon";

export interface Props {
  /**
   * Callback fired upon clicking on root component.
   */
  onClick?: () => void;
  /**
   * Icon to display.
   */
  icon: IconProp;
}

const TopbarIcon: React.FC<Props> = ({ icon, onClick }) => {
  return <Icon icon={icon} onClick={onClick} className="pa3" />;
};

export default TopbarIcon;
