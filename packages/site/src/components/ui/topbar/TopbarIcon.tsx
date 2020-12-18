import * as React from "react";
import Icon, { IconProp } from "../icon";

interface Props {
  onClick: () => void;
  icon: IconProp;
}

const TopbarIcon: React.FC<Props> = ({ icon, onClick }) => {
  return <Icon icon={icon} onClick={onClick} className="pa3" />;
};

export default TopbarIcon;
