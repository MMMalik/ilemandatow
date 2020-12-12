import * as React from "react";
import Icon, { IconProp } from "@components/ui/icon";

interface Props {
  onClick: () => void;
  icon: IconProp;
}

const TopbarIcon: React.FC<Props> = ({ icon, onClick }) => {
  return (
    <div className="mv3 mh2 mh3-ns dib">
      <Icon icon={icon} onClick={onClick} />
    </div>
  );
};

export default TopbarIcon;
